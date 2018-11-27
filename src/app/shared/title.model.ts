export class Title {
    constructor(
        public titleSort: string, 
        public titleSort_it: string,
        public titleSort_gr: string,
        public summaryLong:  string,
        public summaryLong_it:  string,
        public summaryLong_gr:  string,
        public year: string,
        public thumbnail: string[],
        public thumbnail_it: string[],
        public thumbnail_gr: string[],
        public boxCover: string[],
        public boxCover_it: string[],
        public boxCover_gr: string[],
        public movie: string,
        public offer: string[],
        public resolution: string,
        public purchasePrice: number,
        public rentalPrice: number,
        public uriId: string,
        public alternateId: string[]
        ) {
   }
}