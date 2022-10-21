export class ResSiteContent {

  constructor() {
    this.status = false;
    this.message = "";
    this.data = new Data();
  }
  status: boolean
  message: string
  data: Data
}

export class Data {

  constructor() {
    this.left_blue_division = new LeftBlueDivision();
    this.right_blue_division = new RightBlueDivision();
    this.middle_white_division = new MiddleWhiteDivision();
    this.introduction_video = "";
    this.background_music_file = "";
    this.video_file_onload_website = "";
  }
  left_blue_division: LeftBlueDivision
  right_blue_division: RightBlueDivision
  middle_white_division: MiddleWhiteDivision
  introduction_video: string
  background_music_file: string
  video_file_onload_website: string
}

export class LeftBlueDivision {

  constructor() {
    this.title = "";
    this.description = "";
    this.name = "";
    this.designation = "";
  }
  title: string
  description: string
  name: string
  designation: string
}

export class RightBlueDivision {

  constructor() {
    this.title = "";
    this.description = "";   
    this.name = "";
    this.designation = "";
  }
  title: string
  description: string
  name: string
  designation: string
}

export class MiddleWhiteDivision {

  constructor() {
    this.title = "";
    this.description = "";
  }
  title: string
  description: string
}
