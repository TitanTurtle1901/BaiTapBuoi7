function removecolor() {
    var x = document.getElementById("colorSelect");
    if (x.selectedIndex >= 0) {         // -1 nghĩa là không có mục nào được chọn
        x.remove(x.selectedIndex);
    }
}