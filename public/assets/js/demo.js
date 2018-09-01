type = ["primary", "info", "success", "warning", "danger"];
demo = {
    showNotification: function(from, align) {
        color = Math.floor(Math.random() * 4 + 1);

        $.notify(
            {
                icon: "tim-icons icon-bell-55",
                message:
                    "Welcome to <b>Black Dashboard</b> - a beautiful freebie for every web developer."
            },
            {
                type: type[color],
                timer: 10000,
                placement: {
                    from: from,
                    align: align
                }
            }
        );
    }
};
