import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as faker from 'faker';
import { BehaviorSubject } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { merge } from 'rxjs';

faker.locale = 'pt_BR';

@Component({
  selector: 'app-basic-scroll',
  templateUrl: './basic-scroll.component.html',
  styleUrls: ['./basic-scroll.component.css']
})
export class BasicScrollComponent implements OnInit {
  people;
  theEnd = false;
  emogis = ['✌', '😂', '😝', '😁', '😱', '👉', '🙌', '🍻', '🔥', '🌈', '☀', '🎈', '🌹', '💄', '🎀', '⚽', '🎾',
    '🏁', '😡', '👿', '🐻', '🐶', '🐬', '🐟', '🍀', '👀', '🚗', '🍎', '💝', '💙', '👌', '❤', '😍', '😉', '😓',
    '💪', '💩', '🍸', '🔑', '💖', '🌟', '🎉', '🌺', '🎶', '👠', '🏈', '⚾', '🏆', '👽', '💀', '🐵', '🐮', '🐩',
    '👃', '👂', '🍓', '💘', '💜', '👊', '💋', '😘', '😜', '😵', '🙏', '👋', '🚽', '💃', '💎', '🚀', '🌙', '🎁',
    '🌊', '⛵', '🏀', '🎱', '💰', '👶', '👸', '🐰', '🐷', '🐍', '🐫', '🔫', '👄', '🚲', '🍉', '💛', '💚'];

  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  offset = new BehaviorSubject(null);

  constructor() { }

  ngOnInit() {
    this.getBatch();
    this.offset
      .subscribe(res => {
        console.log(res);
        this.people = this.people.concat(this.getBatch());
      });
  }

  nextBatch(e) {
    if (this.theEnd) {
      return;
    }

    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();
    const start = this.viewport.getRenderedRange().start;

    if (e === (total - 20)) {
      this.offset.next(null);
    }
  }

  getBatch() {
    return this.people = Array(100)
      .fill(1)
      .map((_, i) => {
        return {
          emogi: this.emogis[Math.floor(Math.random() * this.emogis.length)],
          name: faker.name.findName(),
          bio: faker.hacker.phrase()
        };
      });
  }

  fetchMore() {
    console.log(this.people);
  }

}
