'use client';

import { useMemo, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

import { ProjectCategory, ProjectDetails } from '@/lib/types';
import ProjectGridCard from '@/components/data-display/project-grid-card';
import { MOTION_EASE, MOTION_DURATION } from '@/lib/motion';
import { mergeClasses } from '@/lib/utils';

type CategoryFilter = 'All' | ProjectCategory;

const FILTERS: CategoryFilter[] = ['All', 'Full-stack', 'Frontend'];

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

type AllProjectsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projects: ProjectDetails[];
};

const AllProjectsDialog = ({
  open,
  onOpenChange,
  projects,
}: AllProjectsDialogProps) => {
  const [filter, setFilter] = useState<CategoryFilter>('All');

  const visibleProjects = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter, projects]
  );

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: MOTION_DURATION.micro }}
                className="fixed inset-0 z-50 bg-gray-950/40 backdrop-blur-sm"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                initial={{ opacity: 0, y: 32, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 32, scale: 0.98 }}
                transition={{ duration: MOTION_DURATION.hover, ease: MOTION_EASE }}
                className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-gray focus:outline-none md:inset-x-0 md:bottom-[5vh] md:top-[5vh] md:mx-auto md:w-[calc(100%-3rem)] md:max-w-6xl md:rounded-3xl md:border md:border-gray-200 md:shadow-soft"
              >
                <header className="flex flex-col gap-4 border-b border-gray-200 p-4 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Dialog.Title className="text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">
                        All projects
                      </Dialog.Title>
                      <Dialog.Description className="mt-1 text-sm text-gray-600">
                        {projects.length} products, platforms, and client sites
                        — filter by focus area.
                      </Dialog.Description>
                    </div>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label="Close all projects"
                        className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <X size={20} aria-hidden />
                      </button>
                    </Dialog.Close>
                  </div>

                  <div
                    className="flex flex-wrap gap-2"
                    role="group"
                    aria-label="Filter projects by category"
                  >
                    {FILTERS.map((item) => (
                      <button
                        key={item}
                        type="button"
                        aria-pressed={filter === item}
                        onClick={() => setFilter(item)}
                        className={mergeClasses(
                          'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                          filter === item
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-gray-200 bg-gray text-gray-600 hover:border-primary/40 hover:text-primary'
                        )}
                      >
                        {item}
                        <span className="ml-1.5 font-mono text-xs opacity-70">
                          {item === 'All'
                            ? projects.length
                            : projects.filter((p) => p.category === item).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </header>

                <div
                  className="flex-1 overflow-y-auto overscroll-contain p-4 md:p-6"
                  data-lenis-prevent
                >
                  <motion.ul
                    key={filter}
                    initial="hidden"
                    animate="visible"
                    variants={gridVariants}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3"
                  >
                    {visibleProjects.map((project) => (
                      <ProjectGridCard key={project.name} project={project} />
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default AllProjectsDialog;
