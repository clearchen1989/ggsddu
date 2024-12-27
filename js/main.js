require(['jquery','select'],function($) {
    var level_value;
    var course_value;
    var course_type;
    var course_data;
    var show_data;
    var right_list={};
    var wrong_list={};
    var phrase={};
    var statement={};
    

    $(document).ready(function () {
        //遍历.course_select
        $.each(main_select_level, function(index, obj) {
            $("#level").append("<option value='"+obj[1]+"'>"+obj[0]+"</option>");
        });

        // 选择课程 加载数据
        $("select#level").change(function(){
            if ($(this).val() == '-') {
                return;
            }
            level_value = $(this).val();
            $("#course").html('');
            var main_select_course_arr = main_select_course[$(this).val()];
            $.each(main_select_course_arr, function(key, value) {
                $("#course").append("<option value='"+value[1]+"'>"+value[0]+"</option>");
            });

            $("#course").change();
        });

        // 选择课程类型
        $("select#course").change(function(){
            if ($(this).val() == '-') {
                return;
            }
            
            course_value = $(this).val();
            require([level_value+course_value],function(charArr) {
                var phrase_str;
                var statement_str;
                var text_str;

                if (level_value == 'fifty_chart') {
                    phrase_str = '音标';
                    statement_str = '单词';
                    if (course_value == 31) {
                        phrase_str = '音读';
                        statement_str = '训读';
                    }
                } else {
                    phrase_str = '单词';
                    statement_str = '语句';
                    text_str = '课文';
                }
                
                $("#course_type").html('');
                phrase = charArr['phrase'];
                statement = charArr['statement'];

                if (Object.keys(phrase).length > 0){
                    $("#course_type").append("<option value='phrase'>"+phrase_str+"</option>");
                }

                if (Object.keys(statement).length > 0){
                    $("#course_type").append("<option value='statement'>"+statement_str+"</option>");
                }

                if (Object.keys(text).length > 0){
                    $("#course_type").append("<option value='text'>"+text_str+"</option>");
                }
            });

        });

        $("select#course_type").change(function(){
            if ($(this).val() == '-') {
                return;
            }
            course_type = $(this).val();
        });

        $(".course_load").click(function(){
            $("#course_type").change();
            if (course_type == 'phrase') {
                load(phrase)
            } else if (course_type == 'statement') {
                load(statement)
            } else if (course_type == 'text') {
                load(text)
            }
        });

        $("#check_submit").click(function(){
            check();
        });

        $(document).keypress(function(e) {
            if(e.which == 13) {
                check();
            }
        });
        
        $("#retry_submit").click(function(){
            var wrong_length = Object.keys(wrong_list).length;
            
            if (wrong_length > 0) {
                course_data = wrong_list;
                right_list = {};
                wrong_list = {};
                show();
            }
        });

        $("#audio_icon").click(function(){
            $('#audio')[0].play();
        });

        $("#level").change();

    })

    function load(data)
    {
        right_list = {};
        wrong_list = {};

        course_data = data;
        show();
    }

    function check()
    {
        char_value = $("#char").val();
        show_value = $("#show").html();

        if (show_data.indexOf(char_value) < 0) {
            wrong_list[show_value] = show_data;
        } else {
            right_list[show_value] = show_data;
        }

        show();
    }

    function show(){
        var right_length = Object.keys(right_list).length;
        var wrong_length = Object.keys(wrong_list).length;
        $("#rightBook").html('');
        $("#wrongBook").html('');
        $("#correct").html(right_length);
        $("#wrong").html(wrong_length);

        if (right_length > 0) {
            var right_str = '';
            for(let key in right_list){
                right_str = '<li class="list-group-item">'+key+' : '+right_list[key]+'</li>' + right_str;
            }
            $("#rightBook").html(right_str);
        }
        
        if (wrong_length > 0) {
            var wrong_str = '';
            for(let key in wrong_list){
                wrong_str = '<li class="list-group-item">'+key+' : '+ wrong_list[key]+'</li><li class="list-group-item"><input class="wrong-text" type="text" data="'+wrong_list[key]+'" style="width:100%"/></li>' + wrong_str;
            }
            $("#wrongBook").html(wrong_str);
        }

        $(".wrong-text").blur(function(){
            if ($(this).val() != '' && $(this).attr('data').indexOf($(this).val()) !== -1){
                $(this).css("border","1px solid #00FF00");
            } else {
                $(this).css("border","1px solid #FF0000");
            }
        });
        

        var keyData = Object.keys(course_data);
        if (keyData.length == 0) {
            alert('game over! refresh!');
            return;
        }
        
        if (course_type == 'text') {
            var i = 0;
        } else {
            var i = Math.floor(Math.random() * keyData.length);
        }
        
        var randomlyKey = keyData[i];

        show_data = course_data[randomlyKey];
        
        var tmp = {};
        for(let key in course_data){
            if (key == randomlyKey) {
                continue;
            }
            tmp[key] = course_data[key];
        }
        course_data = tmp;

        $("#show").html(randomlyKey);

        $("#char").val("");
        $("#count_num").html(keyData.length);
        $("#char").focus();
    }
});