export class TitleLogicAppModel {
    constructor(
        public titleSort: string, 
        public summaryLong:  string,
        public year: string,
        public languages: string[],
        public thumbnail: string,
        public boxCover: string,
        ) {
   }
}