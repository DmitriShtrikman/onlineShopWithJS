Vue.component('sorteritem', {
    props: ['visible'],
    template: `
    <div class="filter-size-options" v-show="visible">
        <input id="size-xs" type="checkbox">          
        <label class="filter-size-options-item-xs" for="size-xs">xs
        </label>
        <input id="size-s" type="checkbox">          
        <label class="filter-size-options-item-s" for="size-s">s
        </label>
        <input id="size-m" type="checkbox">          
        <label class="filter-size-options-item-m" for="size-m">m
        </label>
        <input id="size-l" type="checkbox">          
        <label class="filter-size-options-item-l" for="size-l">l
        </label>
    </div>  
    `
});