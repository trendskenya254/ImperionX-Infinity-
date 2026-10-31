import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, ChevronRight, Play, Pause, Maximize2, X, 
  Copy, Check, Sparkles, Lightbulb, Terminal, Layers
} from 'lucide-react';
import { TutorialStep } from '../../types/tutorial';
import { ExpandableCaption } from './ExpandableCaption';
import { useNavigation } from '../../context/NavigationContext';

interface ImageCarouselProps {
  steps: TutorialStep[];
  title?: string;
  subtitle?: string;
  badge?: string;
  autoPlayInterval?: number;
  aspectRatio?: '16/9' | '16/10' | '21/9' | '4/3';
  className?: string;
  initialStepIndex?: number;
  onStepChange?: (index: number) => void;
  showThumbnails?: boolean;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  steps,
  title,
  subtitle,
  badge = 'Interactive Step-by-Step Lab',
  autoPlayInterval = 6000,
  aspectRatio = '16/10',
  className = '',
  initialStepIndex = 0,
  onStepChange,
  showThumbnails = true,
}) => {
  const { navigate } = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(initialStepIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [progress, setProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const totalSteps = steps.length;
  const currentStep = steps[currentIndex] || steps[0];

  // Aspect ratio helper
  const aspectClass = {
    '16/9': 'aspect-[16/9]',
    '16/10': 'aspect-[16/10]',
    '21/9': 'aspect-[21/9]',
    '4/3': 'aspect-[4/3]'
  }[aspectRatio] || 'aspect-[16/10]';

  const goToStep = useCallback((index: number) => {
    let nextIndex = index;
    if (nextIndex < 0) nextIndex = totalSteps - 1;
    if (nextIndex >= totalSteps) nextIndex = 0;
    setCurrentIndex(nextIndex);
    setProgress(0);
    if (onStepChange) onStepChange(nextIndex);
  }, [totalSteps, onStepChange]);

  const handleNext = useCallback(() => {
    goToStep(currentIndex + 1);
  }, [currentIndex, goToStep]);

  const handlePrev = useCallback(() => {
    goToStep(currentIndex - 1);
  }, [currentIndex, goToStep]);

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying || totalSteps <= 1) return;

    const intervalTime = 100;
    const increment = (intervalTime / autoPlayInterval) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, autoPlayInterval, totalSteps, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (e.key === 'Escape') setIsLightboxOpen(false);
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
        return;
      }

      // Check if carousel is in viewport
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          handleNext();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          handlePrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, handleNext, handlePrev]);

  // Copy code handler
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <div 
      ref={containerRef}
      className={`w-full rounded-2xl sm:rounded-3xl bg-[#080d17] border border-slate-800/80 shadow-2xl overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Top Header Bar */}
      <div className="px-4 py-3.5 sm:px-6 sm:py-4 border-b border-slate-800/80 bg-[#0a1120] flex flex-wrap items-center justify-between gap-3 text-left">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[11px] font-bold tracking-wide uppercase">
              <Layers className="w-3 h-3 text-blue-400" />
              <span>{badge}</span>
            </span>
            <span className="text-slate-600 text-xs">|</span>
            <span className="text-xs font-mono text-cyan-300 font-bold">
              STEP {String(currentIndex + 1).padStart(2, '0')} / {String(totalSteps).padStart(2, '0')}
            </span>
          </div>
          {title && (
            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-xs text-slate-400 line-clamp-1">
              {subtitle}
            </p>
          )}
        </div>

        {/* Carousel Control Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Autoplay Toggle */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? 'Pause auto-play' : 'Start auto-play'}
            className={`p-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all border ${
              isPlaying 
                ? 'bg-blue-600/20 border-blue-500/50 text-blue-300 shadow-sm shadow-blue-500/20' 
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span className="hidden sm:inline text-[11px]">Auto</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                <span className="hidden sm:inline text-[11px]">Play</span>
              </>
            )}
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous step"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next step"
            className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-md shadow-blue-600/30 cursor-pointer flex items-center gap-1"
          >
            <span className="hidden md:inline text-xs font-bold pl-1">Next Step</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Fullscreen Lightbox Button */}
          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            aria-label="Open full screen inspection"
            title="Inspect high-resolution visual"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Progress Bar for Autoplay */}
      {isPlaying && (
        <div className="w-full h-1 bg-slate-900 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Main Image Stage */}
      <div className="relative group">
        <div className={`w-full ${aspectClass} relative overflow-hidden bg-slate-950 flex items-center justify-center`}>
          <img
            src={currentStep.imageUrl}
            alt={currentStep.title}
            className="w-full h-full object-cover sm:object-contain object-center transition-transform duration-500 group-hover:scale-[1.01]"
            referrerPolicy="no-referrer"
          />

          {/* Gradient vignettes for sleek readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060a12] via-[#060a12]/30 to-transparent pointer-events-none" />

          {/* Floating Step Number Watermark */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 pointer-events-none">
            <span className="px-3 py-1 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-cyan-400 font-mono text-xs font-bold shadow-lg">
              {currentStep.badge || `STEP ${currentStep.stepNumber}`}
            </span>
          </div>

          {/* Floating Magnifier Trigger */}
          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/10 text-slate-300 hover:text-white transition-all opacity-80 group-hover:opacity-100 shadow-lg cursor-pointer"
            title="Zoom in on diagram"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Integrated Floating Caption Overlay */}
        <div className="relative -mt-10 sm:-mt-14 mx-3 sm:mx-6 mb-4 z-20">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0c1322]/95 backdrop-blur-md border border-slate-700/80 shadow-2xl text-left space-y-3">
            
            {/* Header: Step Title and Tag Pills */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-blue-600/30 border border-blue-500/40 text-blue-300 text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                    {currentStep.stepNumber}
                  </span>
                  <h4 className="text-sm sm:text-base font-extrabold text-white">
                    {currentStep.title}
                  </h4>
                </div>
                {currentStep.subtitle && (
                  <p className="text-xs text-blue-400 font-medium pl-7">
                    {currentStep.subtitle}
                  </p>
                )}
              </div>

              {/* Tags */}
              {currentStep.tags && currentStep.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pl-7 md:pl-0">
                  {currentStep.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Expandable Caption: Short Summary + Show More for Full Steps */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Implementation Instruction
              </span>
              <ExpandableCaption
                shortText={currentStep.caption}
                fullText={currentStep.fullExplanation || currentStep.caption}
                maxChars={110}
                className="text-xs sm:text-sm text-slate-200"
              />
            </div>

            {/* Optional Terminal / Code Snippet with 1-Click Copy */}
            {currentStep.codeSnippet && (
              <div className="pt-1">
                <div className="relative rounded-xl bg-[#060910] border border-slate-800/90 overflow-hidden text-left font-mono">
                  <div className="px-3 py-1.5 bg-[#0b101c] border-b border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-blue-400" />
                      <span>Terminal / Code Starter</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyCode(currentStep.codeSnippet!)}
                      className="inline-flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
                    >
                      {copiedCode ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-3 text-[11px] sm:text-xs text-blue-200/90 overflow-x-auto whitespace-pre leading-relaxed scrollbar-thin">
                    <code>{currentStep.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            )}

            {/* Optional Pro Tip / Practical Monetization Highlight */}
            {currentStep.practicalTip && (
              <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-800/40 text-amber-200/90 text-xs flex items-start gap-2.5">
                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-amber-300">Action Tip: </strong>
                  {currentStep.practicalTip}
                </p>
              </div>
            )}

            {/* Optional Step Action Button */}
            {currentStep.actionButton && (
              <div className="pt-1 flex justify-end">
                <button
                  type="button"
                  onClick={() => navigate(currentStep.actionButton!.targetPage, currentStep.actionButton!.params)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-blue-600/30"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{currentStep.actionButton.label}</span>
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Step Thumbnails Strip */}
      {showThumbnails && totalSteps > 1 && (
        <div className="px-3 sm:px-6 py-3 border-t border-slate-800/80 bg-[#070c17]">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {steps.map((step, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={step.id || idx}
                  type="button"
                  onClick={() => goToStep(idx)}
                  className={`group relative flex items-center gap-2.5 p-1.5 sm:p-2 rounded-xl transition-all shrink-0 text-left cursor-pointer border ${
                    isActive 
                      ? 'bg-blue-950/60 border-blue-500/80 shadow-md shadow-blue-500/20 ring-1 ring-blue-500/40' 
                      : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800 hover:border-slate-700'
                  }`}
                  style={{ minWidth: '150px' }}
                >
                  {/* Thumbnail Image */}
                  <div className="w-12 h-9 rounded-lg overflow-hidden bg-slate-950 border border-slate-800 shrink-0 relative">
                    <img
                      src={step.imageUrl}
                      alt={step.title}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <span className="absolute bottom-0 right-0 px-1 rounded-tl bg-black/80 font-mono text-[9px] text-cyan-300 font-bold">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Thumbnail Title */}
                  <div className="overflow-hidden">
                    <p className={`text-[11px] font-bold truncate ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                      {step.title}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate">
                      Step {idx + 1} of {totalSteps}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Lightbox Header */}
          <div 
            className="w-full max-w-6xl flex items-center justify-between text-white pb-3 border-b border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 text-left">
              <span className="px-2.5 py-1 rounded-lg bg-blue-600/30 border border-blue-500/40 text-blue-300 font-mono text-xs font-bold">
                STEP {currentIndex + 1} OF {totalSteps}
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {currentStep.title}
                </h3>
                {currentStep.subtitle && (
                  <p className="text-xs text-slate-400">
                    {currentStep.subtitle}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
                title="Previous step (ArrowLeft)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white cursor-pointer"
                title="Next step (ArrowRight)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-red-600/80 text-white transition-colors cursor-pointer ml-2"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Image Stage */}
          <div 
            className="relative flex-1 w-full max-w-6xl my-4 flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentStep.imageUrl}
              alt={currentStep.title}
              className="max-w-full max-h-[75vh] object-contain rounded-xl border border-slate-800 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Lightbox Footer Caption */}
          <div 
            className="w-full max-w-4xl p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-left text-xs sm:text-sm text-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-semibold text-white mb-1">
              {currentStep.caption}
            </p>
            {currentStep.fullExplanation && (
              <p className="text-xs text-slate-300">
                {currentStep.fullExplanation}
              </p>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
