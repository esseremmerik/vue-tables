/**
 * Created by stefan on 20-08-16.
 */
module.exports  = function(){

    var columns = console.log(this.columns);

    return {
        handle: '.handle',
        filter: '.disabled',
        onStart: function (/**Event*/evt) {
            // console.log(evt.oldIndex);
            // evt.oldIndex;  // element index within parent
        },

        // dragging ended
        onEnd: function (/**Event*/evt) {
            lol.columns = ['id', 'name', 'status', 'actions', 'master'];
            // evt.oldIndex;  // element's old index within parent
            // evt.newIndex;  // element's new index within parent
        },

        // Element is dropped into the list from another list
        onAdd: function (/**Event*/evt) {
            // var itemEl = evt.item;  // dragged HTMLElement
            // evt.from;  // previous list
            // + indexes from onEnd
        },

        // Changed sorting within list
        onUpdate: function (/**Event*/evt) {
            // var itemEl = evt.item;  // dragged HTMLElement
            // console.log(itemEl);

            // + indexes from onEnd
        },

        // Called by any change to the list (add / update / remove)
        onSort: function (/**Event*/evt) {
            // same properties as onUpdate
        },

        // Element is removed from the list into another list
        onRemove: function (/**Event*/evt) {
            // same properties as onUpdate
        },

        // Attempt to drag a filtered element
        onFilter: function (/**Event*/evt) {
            var itemEl = evt.item;  // HTMLElement receiving the `mousedown|tapstart` event.
        },

        // Event when you move an item in the list or between lists
        onMove: function (/**Event*/evt) {
            // console.log(evt.dragged);
            // console.log(evt.draggedRect);
            // console.log(evt.related);
            // console.log(evt.relatedRect);

            // Example: http://jsbin.com/tuyafe/1/edit?js,output
            // evt.dragged; // dragged HTMLElement
            // evt.draggedRect; // TextRectangle {left, top, right и bottom}
            // evt.related; // HTMLElement on which have guided
            // evt.relatedRect; // TextRectangle
            // return false; — for cancel
        },
        group: [
            {
                name: 'inactive',
                put: ['active']
            },
            {
                name: 'active',
                put: ['inactive']
            }
        ],
        animation: 100
    }
}