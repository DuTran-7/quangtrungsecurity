import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit {
  page = 4;
  page1 = 5;
  focus;
  focus1;
  focus2;
  date: { year: number, month: number };
  model: NgbDateStruct;
  dichvu: any[] = [];
  constructor(private renderer: Renderer2) { }
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

  ngOnInit() {
    let input_group_focus = document.getElementsByClassName('form-control');
    let input_group = document.getElementsByClassName('input-group');
    for (let i = 0; i < input_group.length; i++) {
      input_group[i].children[0].addEventListener('focus', function () {
        input_group[i].classList.add('input-group-focus');
      });
      input_group[i].children[0].addEventListener('blur', function () {
        input_group[i].classList.remove('input-group-focus');
      });
    }
    // for (let i = 0; i < 6; i++) {
    const item: any = {
      name: 'BẢO VỆ TÒA NHÀ',
      des: 'Dịch vụ bảo vệ mục tiêu cố định là bảo vệ tài sản thuộc quyền sở hữu hợp pháp của khách hàng như: Tòa...'
    }
    const item1: any = {
      name: 'BẢO VỆ KHU CÔNG NGHIỆP',
      des: 'Chúng tôi đưa ra các hoạt động kiểm tra chặt chẽ nhằm kiểm soát công nhân, nhân viên, khách hàng...'
    }
    const item2: any = {
      name: 'BẢO VỆ MỤC TIÊU CỐ ĐỊNH',
      des: 'Dựa trên đặc điểm vị trí và tình hình hoạt động sản xuất, kinh doanh thực tế của từng Mục tiêu mà...'
    }
    const item3: any = {
      name: 'BẢO VỆ GIỮ XE',
      des: 'Là dịch vụ bảo vệ giữ xe tại các Công Ty, Văn phòng, Cửa hàng, Chung cư, nhà hàng, trung tâm thươn...'
    }
    const item4: any = {
      name: 'BẢO VỆ BỆNH VIỆN',
      des: 'Công tác đảm bảo an ninh cho bệnh viện là một nhiệm vụ quan trọng bởi vì bệnh viện là nơi tập trung...'
    }
    const item5: any = {
      name: 'BẢO VỆ TRƯỜNG HỌC',
      des: 'Trường học là nơi nuôi lớn mầm non của tương lai, việc bảo vệ an ninh cơ sở vật chất cũng như hoạt...'
    }
    this.dichvu.push(item);
    this.dichvu.push(item1);
    this.dichvu.push(item2);
    this.dichvu.push(item3);
    this.dichvu.push(item4);
    this.dichvu.push(item5);
  }
}
