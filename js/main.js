$(function () {
    let left = $(".left-content");
    let right = $(".right-content");
    let left_titles = [];
    let right_titles = [];
    for (let data of DATA) {
        let title = $("<li/>").text(data.type);
        right.append(title);
        for (let content of data.content) {
            let item = $("<div/>").addClass("item");
            let img = $("<img/>").attr({
                src: "img/" + content.img
            });
            let name = $("<span/>").addClass("title").append($("<strong/>").text(content.name.split(" ")[0]), "&nbsp;", $("<span/>").text(content.name.split(" ")[1]));
            let detail = $("<span/>").addClass("detail of").text(content.detail);
            let price = content.price?$("<span/>").addClass("price").text(content.price):$("<span/>");
            right.append($("<li/>").append(item.append(img, $("<div/>").addClass("info").append(name, detail, price))));
        }
        let lt = $("<li/>").text(data.type);
        lt.click(function () {
            right[0].scrollTop = title[0].offsetTop;
            setTimeout(() => {
                for(let e of left_titles) {
                    e.removeClass("active");
                }
                lt.addClass("active");
            }, 10);
        });
        left.append(lt);

        left_titles.push(lt);
        right_titles.push(title);
    }

    right.scroll(function() {
        let st = right[0].scrollTop;
        for(let e of left_titles) {
            e.removeClass("active");
        }
        for(let i in left_titles) {
            if(right_titles[i][0].offsetTop > st) {
                left_titles[i - 1].addClass("active");
                return;
            }
        }
        left_titles[left_titles.length - 1].addClass("active");
    })

    left_titles[0].addClass("active");
})