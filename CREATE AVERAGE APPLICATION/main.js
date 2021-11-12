// tạo một array mới .
var data = new Array();

//chờ tài liệu tải xong mới chạy .
$(document).ready(function() {
    $("#send").click(function() {
        var textname = $('#textname').val();
        var textmath = $('#textmath').val();
        var textphysical = $('#textphysical').val();
        var textchemistry = $('#textchemistry').val();
        var regex =/^[0-9]+$/; // hàm kiểm tra số.

        var textErrors = 'Tên không được để trống';
        var numberErrors = 'Điểm không được để trống';
        
        // kiểm tra giá trị tên
        if (textname == '') {
            $('.errors_name').html(textErrors);
            $('.errors_name').css('display','block');
            return false;
        } else {
            $('.errors_name').html('');
            $('.errors_name').css('display','none');
        }

        // kiểm tra giá trị điểm toán
        if (textmath == '') {
            $('.errors_math').html(numberErrors);
            $('.errors_math').css('display','block');
            return false;
        } else if(!textmath.match(regex)) {
            $('.errors_math').html('Bạn phải nhập là số');
            $('.errors_math').css('display','block');
            return false;
        } else {
            $('.errors_math').html('');
            $('.errors_math').css('display','none');
        }

        // kiểm tra giá trị điểm lý.
        if (textphysical == '') {
            $('.errors_physical').html(numberErrors);
            $('.errors_physical').css('display','block');
            return false;
        } else if(!textphysical.match(regex)) {
            $('.errors_physical').html('Bạn phải nhập là số');
            $('.errors_physical').css('display','block');
            return false;
        } else {
            $('.errors_physical').html('');
            $('.errors_physical').css('display','none');
        }

        // kiểm tra giá trị điểm hóa .
        if (textchemistry == '') {
            $('.errors_chemistry').html(numberErrors);
            $('.errors_chemistry').css('display','block');
            return false;
        } else if(!textchemistry.match(regex)) {
            $('.errors_chemistry').html('Bạn phải nhập là số');
            $('.errors_chemistry').css('display','block');
            return false;
        } else {
            $('.errors_chemistry').html('');
            $('.errors_chemistry').css('display','none');
        }

        var Testscore = {
            name: '',
            math: 0,
            physical: 0,
            chemistry: 0
        };

        Testscore.name = textname;
        Testscore.math = textmath;
        Testscore.physical = textphysical;
        Testscore.chemistry = textchemistry;
        data.push(Testscore); // cộng thông tin vào mảng arr.

        $('#textname').val('');
        $('#textmath').val('');
        $('#textphysical').val('');
        $('#textchemistry').val('');

        // đưa thông tin vào bảng .
        $('#mytable').append(
            '<tr class="derow"><td>' + data.length + '</td>'
            + '<td>' + textname + '</td>'
            + '<td>' + textmath + '</td>'
            + '<td>' + textphysical + '</td>'
            + '<td>' + textchemistry + '</td>'
            + '<td>' + '?' + '</td></tr>');
    });

    // hàm tính điểm trung bình.
   $('#avg').click(function() {
        var trs = $('#mytable tr:nth-child(n+2)');
        trs.each(function() {         
            var cell2 = $(this).find('td').eq(2).html();
            var cell3 = $(this).find('td').eq(3).html();
            var cell4 = $(this).find('td').eq(4).html();
            var cell5 = $(this).find('td').eq(5).html(((parseFloat(cell2)
             + parseFloat(cell3) + parseFloat(cell4))/3).toFixed(1));
            //var tb = ((parseFloat(cell2) + parseFloat(cell3) + parseFloat(cell4))/3).toFixed(2);      
        })
    });

    // hàm xét học sinh giỏi.
    $('#rang').click(function() {
        var trows = $('#mytable tr:nth-child(n+2)');
        trows.each(function() {
             var icell5= $(this).find('td').eq(5).html();
             if (parseFloat(icell5) >= 8.0) {
                 $(this).addClass('xeploai');
             }
        })
    })

    // xóa hàng cuối cùng trong bảng .
    $('#delete-row').click(function() {
        $('#mytable tr.derow:last').remove(); // không xóa title của ban đầu của bảng.
        })

});