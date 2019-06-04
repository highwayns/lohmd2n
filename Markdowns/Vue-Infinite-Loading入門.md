Vue-Infinite-Loading入門
===
* knowledgeid: -LdLtaiBADqiIat-6k_4
* author: tei952
* authorid: iHmcxnnRDWPOJAE38On1nCdq0ir2

## 1.0 Installation
```
npm install vue-infinite-loading -S
```
## 3.0 Component
```
`
```
## 4.0 Plugin API
```
`
```
## 5.0 Start With Hacker News
```

// main.js or index.js
import InfiniteLoading from &#39;vue-infinite-loading&#39;;</p>
<p>Vue.use(InfiniteLoading, { /<em> options </em>/ });

```
## 6.0 Use With Filter/Tabs
```
`
```
## 7.0 Top Direction Scroll
```
`
```
## 8.0 Use With Element UI
```
`
```
## 9.0 Configure Load Messages
```
`
```
## 10.0 Configure Plugin Options
```

Via Component Prop
Only the spinner slot can be configured via the prop, and the set value can only be the built-in spinner type:</p>
<p><infinite-loading spinner="spiral"></infinite-loading>
You can preview all built-in spinner types on the right. Please use other ways if you want to create your own spinner.</p>
<p>Via slot Sepcial Attribute
We can use the slot special attribute  to configure them:</p>
<p><infinite-loading>
  <div slot="spinner">Loading...</div>
  <div slot="no-more">No more message</div>
  <div slot="no-results">No results message</div>
</infinite-loading>
Unlike other slots, the default value for the error slot will provide a retry button for users to load the data again. If you want to implement a retry button for users when you customize the error slot, you can use the slot-scope  feature, like this:</p>
<p><infinite-loading>
  <div slot="error" slot-scope="{ trigger }">
    Error message, click <a href="javascript:;" @click="trigger">here</a> to retry
  </div>
</infinite-loading></p>
<p>Via Plugin API
In order to maintain consistent behavior for all load messages when we are building a large application, this plugin supports configuration on all slots using the plugin API. We just need to pass a string or Vue component to it, click here to read more about that.
The error slot is still special in this way. Just as with the slot special attribute, if you want to implement a retry button for users in your own error component, you can use the vm.$attrs  property, like this:
<!-- your own error component --></p>
<p><div>
  Error message, click
  <a href="javascript:;" @click="$attrs.trigger">here</a>
  to retry
</div>
If you want to keep variables clear, you can also define a function property named trigger, and bind it to your retry button:
// your own error component
export default {
  /<em> ... </em>/
  props: {
    trigger: Function,
  },
  /<em> ... </em>/
};</p>
<p>About Hide &amp; Default Styles
For easy use, this component provides some default styles (font-size, color and padding) for slot content. If you want to keep all default styles when you configure via the slot special attribute, you have to wrap the content with a template tag:</p>
<p><infinite-loading>
  <!-- The no-more message will has default styles -->
  <template slot="no-more">No more message</template>
</infinite-loading></p>
<p>If you want to hide a slot, you can create an empty element that is not a template element, because the empty template element will be ignored by Vue.js:</p>
<p><infinite-loading>
  <!-- The no-more slot will not be displayed -->
  <span slot="no-more"></span>
</infinite-loading>
If you want to remove all default styles to avoid affecting your own styles, you can wrap the content with an element that is not a template element:</p>
<p><infinite-loading>
  <!-- The no-more message will has no default styles -->
  <div slot="no-more">No more message</div>
</infinite-loading>
I almost forgot, if you want to configure the slot content globally via the plugin API, you can control it like this:
import Vue from &#39;vue&#39;;
import InfiniteLoading from &#39;vue-infinite-loading&#39;;
import InfiniteError from &#39;path/to/your/components/InfiniteError&#39;,</p>
<p>Vue.use(InfiniteLoading, {
  slots: {
    // keep default styles
    noResults: &#39;No results message&#39;,</p>
// remove default styles
noMore: InfiniteError,

// hide slot
error: {
  render: h =&gt; h(&#39;div&#39;),
},
<p>  },
});

```
## 11.9 御修了ありがとうございました。
* certificatePath: https://firebasestorage.googleapis.com/v0/b/wohapp-3a179.appspot.com/o/knowledgecontents%2FiHmcxnnRDWPOJAE38On1nCdq0ir2%2F-LdLtaiBADqiIat-6k_4x10?alt=media&token=96240967-b020-458d-a7bb-676dde19f6ed
