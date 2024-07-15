/* eslint-disable @next/next/no-img-element */
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Comment from './Comment';
import Rating from './Rating';
type ReviewCardProps = {
  reviewInfo: {
    comment: string;
    rating: number;
    name: string;
    image: string;
  };
  children?: React.ReactNode;
};
function ReviewCard({ reviewInfo, children }: ReviewCardProps) {
  return (
    <Card className='relative'>
      <CardHeader>
        <div className='flex items-center'>
          <img
            src={reviewInfo.image}
            alt='profile'
            className="w-12 h-12 rounded-full object-cover" />
        </div>
        <div className='ml-4'>
          <h3 className="text-sm fontbold capitalize mb-1">
            {reviewInfo.name}
            <Rating rating={reviewInfo.rating} />
          </h3>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={reviewInfo.comment} />
      </CardContent>
      {/* delte button later */}
      <div className="absolute top-3 right-3">{children}</div>
    </Card>
  );
}
export default ReviewCard;