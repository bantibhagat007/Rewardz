// src/app/core/services/reward.service.ts
import { Injectable, computed, signal } from '@angular/core';
import { Reward } from '../interfaces/reward.interface';

@Injectable({
    providedIn: 'root'
})
export class RewardService {
    private rewards = signal<Reward[]>([]);
    private searchTerm = signal('');
    private sortDirection = signal<'asc' | 'desc' | undefined>(undefined);
    private categoryFilter = signal<string | undefined>(undefined);

    constructor() {
        this.initializeRewards();
    }

    private initializeRewards() {
        const mockRewards: Reward[] = [
            {
                pk: 1,
                name: 'test reward',
                points: 0,
                display_img_url: 'https://rewardz.sg/images/banners/homepage/cerra-applause-rewards-and-recognition.png',
                valid_until: '31-12-2024',
                quantity: 0,
                low_quantity: 10
            },
            {
                pk: 2,
                name: 'Dairy Farm $20',
                points: 2,
                display_img_url: 'https://rewardz.sg/images/banners/homepage/cerra-flex-employee-benefit-program.png',
                valid_until: '31-12-2024',
                quantity: 2,
                low_quantity: 14
            },
            {
                pk: 3,
                name: 'Qoo10 $5 (Code + Pin) together',
                points: 10,
                display_img_url: 'https://rewardz.sg/images/banners/homepage/cerra-incentives-channel-rewards-marketplace.png',
                valid_until: '31-12-2024',
                quantity: 15,
                low_quantity: 3
            },
            {
                pk: 4,
                name: 'Qoo10 $5 (Code + Pin) together',
                points: 10,
                display_img_url: 'https://rewardz.sg/images/banners/homepage/cerra-incentives-channel-rewards-marketplace.png',
                valid_until: '31-12-2024',
                quantity: 19,
                low_quantity: 6
            },
            {
                pk: 5,
                name: 'Qoo10 $5 (Code + Pin) together',
                points: 10,
                display_img_url: 'https://rewardz.sg/images/banners/homepage/cerra-incentives-channel-rewards-marketplace.png',
                valid_until: '31-12-2024',
                quantity: 16,
                low_quantity: 9
            },
            {
                pk: 6,
                name: 'Qoo10 $5 (Code + Pin) together',
                points: 10,
                display_img_url: 'https://rewardz.sg/images/banners/homepage/cerra-incentives-channel-rewards-marketplace.png',
                valid_until: '31-12-2024',
                quantity: 17,
                low_quantity: 12
            },
            {
                pk: 7,
                name: 'Qoo10 $5 (Code + Pin) together',
                points: 10,
                display_img_url: 'https://rewardz.sg/images/banners/homepage/cerra-incentives-channel-rewards-marketplace.png',
                valid_until: '31-12-2024',
                quantity: 13,
                low_quantity: 15
            }
        ];
        this.rewards.set(mockRewards);
    }

    getFilteredAndSortedRewards() {
        return computed(() => {
            let filteredRewards = this.rewards();
            if (this.searchTerm()) {
                filteredRewards = filteredRewards.filter(reward =>
                    reward.name.toLowerCase().includes(this.searchTerm().toLowerCase())
                );
            }
            if (this.sortDirection()) {
                filteredRewards.sort((a, b) => {
                    return this.sortDirection() === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
                });
            }
            return filteredRewards;
        });
    }

    setSearchTerm(term: string) {
        this.searchTerm.set(term);
    }

    setSortDirection(direction: 'asc' | 'desc' | undefined) {
        this.sortDirection.set(direction);
    }

    setCategoryFilter(category: string) {
        this.categoryFilter.set(category);
    }

    clearCategoryFilter() {
        this.categoryFilter.set(undefined);
    }
}