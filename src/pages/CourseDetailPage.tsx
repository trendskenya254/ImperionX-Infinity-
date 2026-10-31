import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { courseService } from '../services/courseService';
import { FACULTIES } from '../data/faculties';
import { 
  Clock, Users, Star, ArrowLeft, ArrowUpRight, Play, CheckCircle2, 
  FileCode, Sparkles, BookOpen, ChevronDown, ChevronUp, ShieldCheck, 
  DollarSign, Wrench, X
} from 'lucide-react';
import { ImageCarousel } from '../components/common/ImageCarousel';
import { getTutorialForCourse } from '../data/tutorialSteps';

export const CourseDetailPage: React.FC = () => {
  const { params, navigate, openRegistrationWithPlan } = useNavigation();
  const [openModuleId, setOpenModuleId] = useState<string>('m1');
  const [activePreviewLesson, setActivePreviewLesson] = useState<{
    title: string;
    duration: string;
  } | null>(null);

  const courseId = params.courseId || 'ai-agents-production';
  const course = courseService.getCourseById(courseId) || courseService.getAllCourses()[0];
  const faculty = FACULTIES.find((f) => f.id === course?.facultyId);

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Course Not Found</h2>
        <p className="text-sm text-slate-400 mb-6">The requested course could not be located in our curriculum catalogue.</p>
        <button
          onClick={() => navigate('courses')}
          className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg"
        >
          Return to Courses Catalogue
        </button>
      </div>
    );
  }

  const toggleModule = (id: string) => {
    setOpenModuleId(openModuleId === id ? '' : id);
  };

  const totalLessons = course.modules.reduce((acc, m) => acc + m.lessonsCount, 0);

  return (
    <div className="w-full py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-6">
          <button onClick={() => navigate('home')} className="hover:text-white transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => navigate('courses')} className="hover:text-white transition-colors">Courses</button>
          <span>/</span>
          {faculty && (
            <>
              <button 
                onClick={() => navigate('courses', { facultyId: faculty.id })} 
                className="hover:text-white transition-colors text-blue-400"
              >
                {faculty.name}
              </button>
              <span>/</span>
            </>
          )}
          <span className="text-white font-medium truncate max-w-xs">{course.title}</span>
        </div>

        {/* Dominant Visual Image Hero Banner */}
        <div className="relative aspect-[21/9] sm:aspect-[24/9] rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 mb-10 shadow-2xl">
          <img
            src={course.imageUrl || 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80'}
            alt={course.title}
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-black/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
            <div>
              <span className="px-3 py-1 rounded-lg bg-blue-600/90 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                {course.level} Level · {course.durationWeeks} Weeks
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 drop-shadow-md">
                {course.title}
              </h1>
            </div>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {course.relatedSystemId && (
                <button
                  onClick={() => navigate('systems', { category: course.relatedSystemId })}
                  className="px-3 py-1.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Launch Related System</span>
                </button>
              )}
              <button
                onClick={() => navigate('kenya-radar')}
                className="px-3 py-1.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md"
              >
                <span>50 Bob Blueprint</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (7 cols): Course Overview, Syllabus, Capstone */}
          <div className="lg:col-span-8 space-y-10 text-left">
            
            {/* Header info */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span className="text-blue-400 font-semibold">{faculty?.name || 'Faculty'}</span>
                <span aria-hidden="true">·</span>
                <span>{course.level} Level</span>
                <span aria-hidden="true">·</span>
                <span>{course.durationWeeks} Weeks Cohort</span>
              </div>

              {/* Compact Caption with Show more / Show less */}
              <div className="p-5 rounded-2xl bg-[#0c1220] border border-slate-800 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Course Synopsis
                </span>
                <p className="text-base font-semibold text-white leading-snug">
                  {course.tagline}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {course.description}
                </p>
              </div>

              {/* Quick stats row */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 text-amber-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold tabular-nums">{course.rating.toFixed(2)}</span>
                  <span className="text-slate-400">({course.reviewsCount} verified student ratings)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="font-semibold tabular-nums">{course.studentsCount}</span>
                  <span className="text-slate-400">active builders enrolled</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-violet-400" />
                  <span>{course.hoursPerWeek} hrs / week commitment</span>
                </div>
              </div>
            </div>

            {/* Capstone Deliverable Spotlight */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 via-[#0c1220] to-[#080d17] border border-blue-900/60 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Practical Capstone Deliverable (Build. Earn.)</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                  Monetizable Asset
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">
                {course.practicalProject.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {course.practicalProject.deliverable}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <DollarSign className="w-4 h-4" />
                <span>{course.practicalProject.earningPotential}</span>
              </div>
            </div>

            {/* Step-by-Step Hands-On Tutorial Walkthrough Carousel */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span>Step-by-Step Hands-On Tutorial Walkthrough</span>
                  </div>
                  <h2 className="text-xl font-bold text-white mt-1">
                    Visual Implementation Lab Guide
                  </h2>
                </div>
                <span className="text-xs text-slate-400">
                  {getTutorialForCourse(course.id).steps.length} Step-by-Step Milestones · Interactive
                </span>
              </div>

              <ImageCarousel
                steps={getTutorialForCourse(course.id).steps}
                title={getTutorialForCourse(course.id).title}
                subtitle={getTutorialForCourse(course.id).subtitle}
                badge={getTutorialForCourse(course.id).badge}
              />
            </div>

            {/* Interactive Syllabus Accordion */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">Curriculum & Interactive Syllabus</h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {course.modules.length} Modules · {totalLessons} Comprehensive Lessons · Full Code Starters
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {course.modules.map((module, mIdx) => {
                  const isOpen = openModuleId === module.id;
                  return (
                    <div
                      key={module.id}
                      className="rounded-xl border border-slate-800 bg-[#0c1220] overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleModule(module.id)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-semibold text-sm sm:text-base text-white hover:text-blue-300 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-md bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs flex items-center justify-center font-bold">
                            {mIdx + 1}
                          </span>
                          <div>
                            <p className="font-bold text-sm text-white">{module.title}</p>
                            <p className="text-xs text-slate-400 font-normal">
                              {module.duration} · {module.lessonsCount} Lessons
                            </p>
                          </div>
                        </div>

                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-blue-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-5 sm:px-5 sm:pb-6 border-t border-slate-800/60 pt-3 space-y-2">
                          {module.lessons.map((lesson, lIdx) => (
                            <div
                              key={lIdx}
                              className="flex items-center justify-between p-2.5 rounded-lg bg-[#080d17]/80 hover:bg-slate-800/40 text-xs text-slate-300 transition-colors"
                            >
                              <div className="flex items-center gap-2.5">
                                <FileCode className="w-3.5 h-3.5 text-slate-500" />
                                <span>{lesson.title}</span>
                              </div>

                              <div className="flex items-center gap-3 shrink-0 ml-4">
                                <span className="text-[11px] font-mono text-slate-400">{lesson.duration}</span>
                                {lesson.isPreviewAvailable ? (
                                  <button
                                    onClick={() => setActivePreviewLesson(lesson)}
                                    className="px-2 py-1 rounded bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold text-[11px] flex items-center gap-1 transition-colors"
                                  >
                                    <Play className="w-3 h-3 fill-current" />
                                    <span>Preview</span>
                                  </button>
                                ) : (
                                  <span className="text-[10px] text-slate-400">Cohort only</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tools Learned & Prerequisites */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-5 rounded-xl bg-[#0c1220] border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                  <Wrench className="w-3.5 h-3.5 text-blue-400" />
                  <span>Production Tooling Mastered</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {course.toolsLearned.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs text-slate-300 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0c1220] border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Prerequisites</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {course.prerequisites.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">·</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Instructor Bio */}
            <div className="p-6 rounded-2xl bg-[#0c1220] border border-slate-800 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Course Architect & Instructor</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-base">
                  {course.instructor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{course.instructor.name}</h4>
                  <p className="text-xs text-blue-400">{course.instructor.role} · {course.instructor.company}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (4 cols): Sticky Enrollment & Membership Card */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#0c1220] border-2 border-blue-600/40 shadow-2xl shadow-blue-950/50 space-y-5 text-left">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Academy Membership Access
                </span>
                <h3 className="text-xl font-extrabold text-white">Enroll in this Program</h3>
                <p className="text-xs text-slate-400">
                  Includes full lifetime codebase access, live cohort reviews, and verified LinkedIn certification.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#080d17] border border-slate-800/80 text-xs space-y-2">
                <div className="flex justify-between text-slate-300">
                  <span>Faculty:</span>
                  <span className="font-semibold text-white">{faculty?.name}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Duration:</span>
                  <span className="font-semibold text-white">{course.durationWeeks} Weeks</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Effort:</span>
                  <span className="font-semibold text-white">{course.hoursPerWeek} Hours/Week</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Certification:</span>
                  <span className="font-semibold text-emerald-400">Included (Verifiable)</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => openRegistrationWithPlan('builder')}
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40 hover:scale-[1.02]"
                >
                  <span>Enroll with Builder Membership</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('pricing')}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-[#080d17] hover:bg-slate-800 border border-slate-800 transition-colors text-center"
                >
                  View All 6 Membership Plans (from KSh 200)
                </button>
              </div>

              <div className="pt-3 border-t border-slate-800/80 space-y-2 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>14-day risk-free money-back guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span>Instant access to AI Sandbox and student repo</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Modal: Interactive Lesson Video & Code Preview Simulator */}
        {activePreviewLesson && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-150">
            <div className="bg-[#0c1220] border border-slate-800 rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl text-left">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Interactive Sample Lesson Preview</span>
                </div>
                <button
                  onClick={() => setActivePreviewLesson(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">{activePreviewLesson.title}</h3>
                <p className="text-xs text-slate-400">Estimated duration: {activePreviewLesson.duration} · High-Definition Video & Code Walkthrough</p>
              </div>

              {/* Video Player Mockup Container */}
              <div className="relative rounded-xl overflow-hidden bg-[#070a12] aspect-video border border-slate-800 flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-14 h-14 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-400">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
                <div className="max-w-md">
                  <p className="text-xs font-semibold text-white">FutureTech Interactive Learning Player</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Stream lecture notes, live execution terminals, and synchronized Jupyter/TypeScript notebooks.
                  </p>
                </div>
                <div className="w-full max-w-xs bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-2/5" />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="text-slate-400">Ready to unlock all modules?</span>
                <button
                  onClick={() => {
                    setActivePreviewLesson(null);
                    openRegistrationWithPlan('builder');
                  }}
                  className="px-4 py-2 font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                >
                  Join Academy to Access
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
