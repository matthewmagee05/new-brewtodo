import { Controller, Get, Body, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReviewService } from './review.service';
import { Review } from './review.entity';

@Controller('review')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) {}

    @Get()
    async findReviewByStore(@Body() storeId: number): Promise<Review[]> {
        return this.reviewService.findReviewsByStore(storeId);
    }

    @Post()
    async create(@Body() review: Review) {
        this.reviewService.createReview(review);
    }
}
