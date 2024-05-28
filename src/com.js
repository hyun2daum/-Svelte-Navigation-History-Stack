import { historyStack, isBack, cur_page, isSkip_page, isFirst_page, HomePath } from './store.js';
import { get, set } from 'svelte/store';
import { navigate } from 'svelte-routing';

export function goBack() {
    console.log("goBack =================");
    const stack = get(historyStack);
    const _isFirstPage = get(isFirst_page);

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
export function initPage(page_path, isSkip_page) {
    console.log("initPage =================");
    let _isBack = get(isBack);

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