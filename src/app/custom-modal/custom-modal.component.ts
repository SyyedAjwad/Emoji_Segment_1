import { SharedDataService } from './../shared-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss'],
})
export class CustomModalComponent implements OnInit {
  constructor(private shared: SharedDataService) {}
  showSegment = false;
  showTable = false;
  EmojiName = '';
  SegmentName = '';
  Description = '';
  colorPalette = [
    'rgba(207, 223, 255, 1)',
    'rgba(156, 199, 255, 1)',
    'rgba(45, 127, 249, 1)',
    'rgba(0, 103, 255, 1)',
    'rgba(0, 84, 209, 1)',
    'rgba(208, 240, 253, 1)',
    'rgba(119, 209, 243, 1)',
    'rgba(24, 191, 255, 1)',
    'rgba(64, 131, 172, 1)',
    'rgba(11, 118, 183, 1)',
    'rgba(194, 245, 233, 1)',
    'rgba(114, 221, 195, 1)',
    'rgba(32, 217, 210, 1)',
    'rgba(123, 200, 195, 1)',
    'rgba(6, 160, 155, 1)',
    'rgba(255, 179, 200, 1)',
    'rgba(255, 140, 173, 1)',
    'rgba(255, 140, 173, 1)',
    'rgba(255, 0, 73, 1)',
    'rgba(218, 2, 64, 1)',
    'rgba(255, 227, 175, 1)',
    'rgba(255, 214, 140, 1)',
    'rgba(255, 197, 92, 1)',
    'rgba(253, 178, 43, 1)',
    'rgba(232, 149, 0, 1)',
    'rgba(255, 159, 242, 1)',
    'rgba(254, 103, 233, 1)',
    'rgba(246, 56, 220, 1)',
    'rgba(255, 0, 220, 1)',
    'rgba(214, 0, 184, 1)',
    'rgba(255, 181, 152, 1)',
    'rgba(255, 158, 121, 1)',
    'rgba(255, 120, 68, 1)',
    'rgba(255, 71, 0, 1)',
    'rgba(197, 55, 0, 1)',
    'rgba(175, 181, 255, 1)',
    'rgba(142, 150, 255, 1)',
    'rgba(107, 118, 255, 1)',
    'rgba(49, 64, 255, 1)',
    'rgba(0, 19, 255, 1)',
    'rgba(131, 204, 139, 1)',
    'rgba(97, 199, 108, 1)',
    'rgba(32, 201, 51, 1)',
    'rgba(0, 181, 20, 1)',
    'rgba(51, 138, 23, 1)',
    'rgba(238, 238, 238, 1)',
    'rgba(204, 204, 204, 1)',
    'rgba(172, 172, 172, 1)',
    'rgba(102, 102, 102, 1)',
    'rgba(68, 68, 68, 1)',
  ];
  tableId;
  ngOnInit(): void {
    this.shared.triggerModal.subscribe((succ: any) => {
      console.log(succ);
      if (succ.modalType == 'OpenSegment') {
        this.showSegment = succ.status;
        this.shared.modalStatus = succ.status;
      } else if (succ.modalType == 'openTable') {
        this.showTable = succ.status;
        this.shared.modalStatus = succ.status;
        this.tableId = succ.id;
      }
    });
  }

  closeSegmentModal() {
    this.showSegment = false;
  }

  closeTableModal() {
    this.showTable = false;
  }

  selectedIcon = '';

  addEmoji(eve) {
    console.log(eve);
    this.selectedIcon = eve.emoji.id;
    this.showPicker = false;
  }

  showPicker = false;
  showIconPicker() {
    this.showPicker = !this.showPicker;
    this.showColorPicker = false;
  }

  showColorPicker = false;
  showColor() {
    this.showColorPicker = !this.showColorPicker;
    this.showPicker = false;
  }

  selectedcolor = 'null';
  colorPreview = false;
  selectedColor(val) {
    console.log(val);
    if (val.length > 1) {
      this.selectedcolor = val;
      this.showColorPicker = false;
      this.colorPreview = true;
    }
  }

  getVal(eve) {
    console.log(eve.target.value);
    this.Description = eve.target.value;
  }

  EmojiArr = {};
  submitTable() {
    var Emoji = {
      Name: this.EmojiName,
      Icon: this.selectedIcon,
      Color: this.selectedcolor,
    };

    console.log(Emoji);

    this.shared.tableSubj.next({
      modalType: 'table',
      data: Emoji,
      id: this.tableId,
    });
    this.showTable = false;
  }

  submitSegment() {
    var segment = {
      Name: this.SegmentName,
      Icon: this.selectedIcon,
      Description: this.Description,
    };

    console.log(segment);

    this.shared.segmentSubj.next({ modalType: 'segment', data: segment });
    this.showSegment = false;
  }
}
