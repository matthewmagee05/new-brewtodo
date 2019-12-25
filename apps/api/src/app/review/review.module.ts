import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { DatabaseModule } from '../../database/database.module';
import { reviewProviders } from './review.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ReviewController],
  providers: [...reviewProviders, ReviewService]
})
export class ReviewModule {}
