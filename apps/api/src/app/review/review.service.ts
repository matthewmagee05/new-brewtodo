import { Injectable, Inject } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Review } from './review.entity'
import { constants } from '../../common/constants'

@Injectable()
export class ReviewService {
    constructor(
        @Inject(constants.reviewRepository)
        private reviewRepository: Repository<Review>
    ) {}

    createReview(review: Review) {
        this.reviewRepository.save(review)
    }
    findReviewsByStore(storeId: number): Promise<Review[]> {
        return this.reviewRepository.find({ where: { storeId } })
    }
}
