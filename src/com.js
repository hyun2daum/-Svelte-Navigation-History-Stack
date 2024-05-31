import { historyStack, isBack, cur_page, isSkip_page, isFirst_page, HomePath, ConfirmMsg } from './store.js';
import { get, set } from 'svelte/store';
import { navigate } from 'svelte-routing';

export function goBack() {
    console.log("goBack =================");
    const stack = get(historyStack);
    const _isFirstPage = get(isFirst_page);
    if (get(ConfirmMsg) != "") {
        if(!confirm(get(ConfirmMsg))) {
            return;
        }
    }
    if (_isFirstPage) {
        return;
    }
    if (stack.length > 0) {			
        isBack.set(true);

        let previousPage = stack.pop();
        if (get(cur_page) == previousPage) {
            previousPage = stack.pop();
        }
        historyStack.set(stack);
        navigate(previousPage);
    }
}
export function initPage(page_path, opt) {
    console.log("initPage =================");
    let _isBack = get(isBack);
    let isSkip_page = false;
    let _ConfirmMsg = "";

    if (opt) {
        isSkip_page = opt.isSkip_page != undefined ? opt.isSkip_page : false;
        _ConfirmMsg = opt.confirmMsg != undefined ? opt.confirmMsg : "";
    }
    ConfirmMsg.set("");
    if (_ConfirmMsg && _ConfirmMsg != "") {
        ConfirmMsg.set(_ConfirmMsg);
    }

    const stack = get(historyStack);
    stack.length == 0 ? isFirst_page.set(true) : isFirst_page.set(false);
    if (!isSkip_page && (!_isBack || stack.length == 0)) {
        historyStack.update(stack => [...stack, page_path]);
    }

    const stack2 = get(historyStack);
    cur_page.set(page_path);
    isBack.set(false);
}

export function goHome() {
    console.log("goHome =================");
    historyStack.set([]);
    navigate(get(HomePath));
}