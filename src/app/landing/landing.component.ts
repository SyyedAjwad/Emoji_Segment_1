import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
// import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';
export interface segment {
  id: string;
  Name: string;
  entries: any[];
  Icon: string;
  Description: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(private shared: SharedDataService) {}

  SegmentArr: segment[] = [];

  ngOnInit(): void {
    this.shared.segmentSubj.subscribe((succ: any) => {
      console.log(succ);
      if (succ.modalType == 'segment') {
        this.SegmentArr.push({
          id: uuidv4(),
          Name: succ.data.Name,
          entries: [],
          Icon: succ.data.Icon,
          Description: succ.data.Description,
        });
      }
    });

    this.shared.tableSubj.subscribe((succ: any) => {
      console.log(succ);
      if (succ.modalType == 'table') {
        let index = (this.SegmentArr as any[]).findIndex(
          (res: any) => res.id === succ.id
        );
        this.SegmentArr[index].entries.push({
          id: uuidv4(),
          Name: succ.data.Name,
          Icon: succ.data.Icon,
          Color: succ.data.Color,
        });
      }
    });
  }

  addSegment() {
    this.shared.triggerModal.next({ modalType: 'OpenSegment', status: true });
  }

  addTable(id) {
    this.shared.triggerModal.next({ modalType: 'openTable', status: true, id });
  }
}
