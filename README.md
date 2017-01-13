# 學習 angular2 的 input 與 output

1. 由 child1 將 物件 child1 透過 @Ouput 傳給 parent，然後parent用 @Input的方式傳給 child2

2. 然後設定一個 click的 event，當使用者在網頁點選child1 works! 時改變child1.lastname。預期是parent 會收到新的child1物件傳給child2，child2在透過OnChanges 執行console.log顯示 lastname在控制台上。但是我們會發現第一次會顯示，第二次則控制台沒有顯示應該執行的console.log，但在網頁上可以明顯知道child1的物件內容 **真的有變更** 這就是問題所在。

3. 目前看起來angular2的OnChanges似乎是用物件的reference是否有相等來判斷。
