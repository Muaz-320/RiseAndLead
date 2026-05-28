import { BRAND_NAME } from '../constants.ts';
import { cn } from '../lib/utils';

export default function BrandName({ className }: { className?: string }) {
  return (
    <span className={cn('font-bold tracking-tight', className)}>
      Rise & Lead{' '}
      <span className="text-orange-500">360</span>
    </span>
  );
}

export { BRAND_NAME };
