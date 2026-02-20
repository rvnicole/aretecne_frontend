interface ProgressBarProps {
    value: number;
}
  
export function ProgressBar({ value }: ProgressBarProps) {
    return (
        <div className="w-full bg-neutral-200 rounded-full h-2">
            <div className="bg-neutral-900 h-2 rounded-full" style={{ width: `${value}%` }}/>
        </div>
    );
  }
  