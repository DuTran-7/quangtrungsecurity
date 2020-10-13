import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    panels = [
        {
            active: false,
            customStyle: {
                background: '#f7f7f7',
                'border-radius': '4px',
                'margin-bottom': '24px',
                border: '0px'
            },
            name: 'KỶ LUẬT',
            disabled: false,
            des: 'Tất cả những nhân viên bảo vệ của công ty Liêm Chính đều là những người đã kinh qua những đơn vị quân đội, công an hoặc lực lực vũ trang khác nên tính kỷ luật rất cao. Ngoài ra công ty Liêm Chính thường xuyên huấn luyện về cho tất cả nhân viên bảo vệ của mình về những nội quy và quy định của công ty và khách hàng qua đó tạo được tính kỷ luật cao cho tất cả nhân viên của mình.'
        },
        {
            active: false,
            customStyle: {
                background: '#f7f7f7',
                'border-radius': '4px',
                'margin-bottom': '24px',
                border: '0px'
            },
            disabled: false,
            name: 'TRÁCH NHIỆM',
            des: 'Công ty Liêm Chính trước khi điều nhân viên bảo vệ đi làm đều được huấn luyện nghiệp vụ chi tiết từng vị trí, và thực hành cách làm, qua đó tất cả nhân viên đều hiểu công việc mình cần phải làm là gì, từ đó sẽ có tính trách nhiệm với việc mình đang làm hơn, nhằm mang lại sự an toàn, an ninh cho hoạt động bình thường của khách hàng. Tất cả nhân viên bảo vệ của công ty Liêm Chính đều được huấn luyện về tính trách nhiệm để tất cả nhân viên nắm bắt và thực hiện tốt công việc của mình. Công ty Liêm Chính luôn huấn luyện cho tất cả nhân viên bảo vệ của mình hiểu được rằng khi mình làm cho khách hàng, thì mình đang là thương hiệu của khách hàng, chứ không riêng chỉ làm cho thương hiệu của công ty Liêm Chính. '
        },
        {
            active: false,
            disabled: false,
            customStyle: {
                background: '#f7f7f7',
                'border-radius': '4px',
                'margin-bottom': '24px',
                border: '0px'
            },
            name: 'CHUYÊN NGHIỆP',
            des: 'Các cán bộ phòng ban của công ty Liêm Chính khi đi khảo sát các mục tiêu của khách hàng đểu được ghi nhận, giải thích, tư vấn cho khách hàng của mình về số lượng vị trí bảo vệ, công việc chuyên môn cần làm là gì một cách chi tiết và cụ thể. Tất cả nhân viên bảo vệ Liêm Chính trước khi được triển khai cho khách hàng, thì đều được tham gia vào lớp huấn luyện nghiệp vụ chuyên môn theo đúng mô hình công việc sắp phải làm, kèm theo phần thực hành cách làm, qua đó nhân viên nắm bắt trước những công việc phải làm một cách nhanh chóng và áp dụng cách làm một cách chuyên nghiệp hơn. Tất cả các phòng ban, đội, tổ trong công ty Liêm Chính đều có quy trình làm việc rất cụ thể và chi tiết, qua đó anh em có cơ sở làm việc một cách chuyên nghiệp, đồng thời lãnh đạo công ty có cơ sở đánh giá năng lực của tất cả mọi người một cách chính xác hơn. Công ty Liêm Chinh luôn có một bộ mẫu các loại biên bản, hồ sơ thống nhất có tính tư duy cao, do vậy mọi người làm việc sẽ tự tin và chuyên nghiệp hơn. Định kỳ hàng tháng, hàng quý, hàng năm toàn bộ cán bộ phòng ban, đội, tổ, nhân viên đều được đánh giá năng lực chuyên môn, sau đó đều được tham gia lớp huấn luyện nâng cao nghiệp vụ của mình một cách thường xuyên liên tục, qua đó sẽ tạo tính chuyên nghiệp cao hơn đối với khách hàng.'
        },
        {
            active: false,
            disabled: false,
            customStyle: {
                background: '#f7f7f7',
                'border-radius': '4px',
                'margin-bottom': '24px',
                border: '0px'
            },
            name: 'TRUNG THỰC',
            des: 'Bất kỳ nhân viên bảo vệ nào của công ty Liêm Chính phát hiện và nhặt được của rơi trả lại người bị mất, thì ban giám đốc công ty đều có những khen thưởng kịp thời bằng tinh thần cũng như vật chất để động viên khích lệ tinh thần làm việc của nhân viên. Hàng tháng, hàng quý, hàng năm công ty Liêm Chính đều phát động phong trào trung thực đến từng nhân viên bảo vệ, qua đó tất cả nhân viên tham gia đều hào hứng và vui vẻ.'
        },
        {
            active: false,
            disabled: false,
            customStyle: {
                background: '#f7f7f7',
                'border-radius': '4px',
                'margin-bottom': '24px',
                border: '0px'
            },
            name: 'CAN ĐẢM',
            des: 'Tính can đảm của tất cả nhân viên bảo vệ công ty Liêm Chính được hình thành la do tham gia lớp huấn luyện võ thuật tự vệ ngắn ngày, qua đó tạo được sự tự tin trong công việc của mình. Khi có bất kỳ sự cố hoặc vụ việc xảy ra tại các mục tiêu bảo vệ, thì nhân viên bảo vệ đã luôn áp dụng nghiệp vụ chuyên môn, kèm theo trình độ võ thuật cơ bản để xử lý. Công ty Liêm Chính luôn huấn luyện cho tất cả nhân viên bảo vệ của mình, khi ra đường phải nêu cao tinh thần nghĩa hiệp và luôn sẵn sang giúp đỡ người yếu hơn mình hoặc cụ già và trẻ em trước mọi uy hiếp từ người khách hoặc cướp giật xảy ra.'
        },
        {
            active: false,
            disabled: false,
            customStyle: {
                background: '#f7f7f7',
                'border-radius': '4px',
                'margin-bottom': '24px',
                border: '0px'
            },
            name: 'THÔNG MINH',
            des: 'Tham gia lớp huấn luyện xử lý tình huống hoặc sự việc cụ thể bằng chuyên môn nghiệp vụ một cách nhanh nhất, Nhân viên bảo vệ qua đó tạo được tính tự học hỏi cao từ mọi người xung quanh hoặc môi trường sống. Ngoài ra thì định kỳ hàng quý và hàng năm công ty Liêm Chính đều tổ chức cuộc thi nghiệp vụ nâng cao cho tất cả mọi người, nếu đạt được điểm chuẩn mà công ty đề ra thì những nhân viên đạt đó sẽ có thêm tiền phụ cấp, qua đó cũng tạo ra được một môi trường học hỏi từ tất cả mọi người, qua đó tạo ra một công ty học tập một cách toàn diện hơn.'
        }
    ];
    constructor() { }

    ngOnInit() { }

}
