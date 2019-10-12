import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, OnChanges {

  private youtubeUrlPrefix = '//www.youtube.com/embed/';

  @Input() videos: Array<string>;
  safeVideoUrls: Array<SafeResourceUrl>;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.safeVideoUrls = this.videos ?
      this.videos
          .map(video =>
            this.sanitizer.bypassSecurityTrustResourceUrl(
              this.youtubeUrlPrefix + video)
          ) : this.videos;
  }

}
