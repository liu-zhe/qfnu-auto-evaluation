// ==UserScript==
// @name         曲阜师范大学自动评教
// @namespace    https://www.lukzia.site/
// @version      0.1
// @description  自动点击所有“良”的选项，并随机选择一个“优”的选项进行点击
// @author       lukzia
// @match        http://zhjw.qfnu.edu.cn/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
     setTimeout(function() {
        // 点击所有“良”的选项
        var goodOptions = document.querySelectorAll('input[id$="_2"]');
        console.log('找到的“良”的选项数量:', goodOptions.length);
        goodOptions.forEach(function (option) {
            option.click();
            console.log('点击了“良”的选项');
        });

        // 获取所有“优”的选项
        var excellentOptions = document.querySelectorAll('input[id$="_1"]');
        if (excellentOptions.length > 0) {
            // 随机选择一个“优”的选项进行点击
            var randomIndex = Math.floor(Math.random() * excellentOptions.length);
            excellentOptions[randomIndex].click();
            console.log('随机点击了一个“优”的选项');
        } else {
            console.log('未找到“优”的选项');
        }
    }, 2000); // 延时2秒
})();