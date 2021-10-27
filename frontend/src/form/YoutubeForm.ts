

export default class YoutubeForm {
    youtubeId: string

    constructor(youtubeId: string) {
        this.youtubeId = youtubeId;
    }

    set setYoutubeId(youtubeId: string) {
        this.youtubeId = youtubeId;
    }
}
