## 1.0 Installation
```
npm install vue-infinite-loading -S
```

## 2.0 Direct <script> Include
```
<script src="https://unpkg.com/vue-infinite-loading@^2/dist/vue-infinite-loading.js"></script>
```

## 3.0 Component
```
<template>
  <infinite-loading></infinite-loading>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';

export default {
  components: {
    InfiniteLoading,
  },
};
</script>
```

## 4.0 Plugin API
```
// main.js or index.js
import InfiniteLoading from 'vue-infinite-loading';

Vue.use(InfiniteLoading, { /* options */ });
```

## 5.0 Start With Hacker News
```
<header>
  <!-- Hacker News header -->
</header>

<div v-for="(item, $index) in list" :key="$index">
  <!-- Hacker News item loop -->
</div>

<infinite-loading @infinite="infiniteHandler"></infinite-loading>

import axios from 'axios';

const api = '//hn.algolia.com/api/v1/search_by_date?tags=story';

export default {
  data() {
    return {
      page: 1,
      list: [],
    };
  },
  methods: {
    infiniteHandler($state) {
      axios.get(api, {
        params: {
          page: this.page,
        },
      }).then(({ data }) => {
        if (data.hits.length) {
          this.page += 1;
          this.list.push(...data.hits);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
  },
};
```

## 6.0 Use With Filter/Tabs
```
<header>
  <!-- Hacker News header -->
  <select v-model="newsType" @change="changeType">
    <!-- Type options -->
  </select>
</header>

<div v-for="(item, $index) in list" :key="$index">
  <!-- Hacker News item loop -->
</div>

<infinite-loading :identifier="infiniteId" @infinite="infiniteHandler"></infinite-loading>

import axios from 'axios';

const api = '//hn.algolia.com/api/v1/search_by_date';

export default {
  data() {
    return {
      page: 1,
      list: [],
      newsType: 'story',
      infiniteId: +new Date(),
    };
  },
  methods: {
    infiniteHandler($state) {
      axios.get(api, {
        params: {
          page: this.page,
          tags: this.newsType,
        },
      }).then(({ data }) => {
        if (data.hits.length) {
          this.page += 1;
          this.list.push(...data.hits);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
    changeType() {
      this.page = 1;
      this.list = [];
      this.infiniteId += 1;
    },
  },
};
```

## 7.0 Top Direction Scroll
```
<header>
  <!-- Hacker News header -->
</header>

<infinite-loading direction="top" @infinite="infiniteHandler"></infinite-loading>

<div v-for="(item, $index) in list" :key="$index">
  <!-- Hacker News item loop -->
</div>

import axios from 'axios';

const api = '//hn.algolia.com/api/v1/search_by_date?tags=story';

export default {
  data() {
    return {
      page: 1,
      list: [],
    };
  },
  methods: {
    infiniteHandler($state) {
      axios.get(api, {
        params: {
          page: this.page,
        },
      }).then(({ data }) => {
        if (data.hits.length) {
          this.page += 1;
          this.list.unshift(...data.hits.reverse());
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
  },
};
```

## 8.0 Use With Element UI
```
<div id="app">
  <el-table>
    <!-- el-table-column items -->

    <infinite-loading
      slot="append"
      @infinite="infiniteHandler"
      force-use-infinite-wrapper=".el-table__body-wrapper">
    </infinite-loading>
  </el-table>
</div>

```

## 9.0 Configure Load Messages
```
Via Component Prop
Only the spinner slot can be configured via the prop, and the set value can only be the built-in spinner type:
<infinite-loading spinner="spiral"></infinite-loading>
You can preview all built-in spinner types on the right. Please use other ways if you want to create your own spinner.
#
Via slot Sepcial Attribute
We can use the slot special attribute  to configure them:
<infinite-loading>
  <div slot="spinner">Loading...</div>
  <div slot="no-more">No more message</div>
  <div slot="no-results">No results message</div>
</infinite-loading>
Unlike other slots, the default value for the error slot will provide a retry button for users to load the data again. If you want to implement a retry button for users when you customize the error slot, you can use the slot-scope  feature, like this:
<infinite-loading>
  <div slot="error" slot-scope="{ trigger }">
    Error message, click <a href="javascript:;" @click="trigger">here</a> to retry
  </div>
</infinite-loading>
#
Via Plugin API
In order to maintain consistent behavior for all load messages when we are building a large application, this plugin supports configuration on all slots using the plugin API. We just need to pass a string or Vue component to it, click here to read more about that.
The error slot is still special in this way. Just as with the slot special attribute, if you want to implement a retry button for users in your own error component, you can use the vm.$attrs  property, like this:
<!-- your own error component -->
<div>
  Error message, click
  <a href="javascript:;" @click="$attrs.trigger">here</a>
  to retry
</div>
If you want to keep variables clear, you can also define a function property named trigger, and bind it to your retry button:
// your own error component
export default {
  /* ... */
  props: {
    trigger: Function,
  },
  /* ... */
};
#
About Hide & Default Styles
For easy use, this component provides some default styles (font-size, color and padding) for slot content. If you want to keep all default styles when you configure via the slot special attribute, you have to wrap the content with a template tag:
<infinite-loading>
  <!-- The no-more message will has default styles -->
  <template slot="no-more">No more message</template>
</infinite-loading>

If you want to hide a slot, you can create an empty element that is not a template element, because the empty template element will be ignored by Vue.js:
<infinite-loading>
  <!-- The no-more slot will not be displayed -->
  <span slot="no-more"></span>
</infinite-loading>
If you want to remove all default styles to avoid affecting your own styles, you can wrap the content with an element that is not a template element:
<infinite-loading>
  <!-- The no-more message will has no default styles -->
  <div slot="no-more">No more message</div>
</infinite-loading>
I almost forgot, if you want to configure the slot content globally via the plugin API, you can control it like this:
import Vue from 'vue';
import InfiniteLoading from 'vue-infinite-loading';
import InfiniteError from 'path/to/your/components/InfiniteError',

Vue.use(InfiniteLoading, {
  slots: {
    // keep default styles
    noResults: 'No results message',

    // remove default styles
    noMore: InfiniteError,

    // hide slot
    error: {
      render: h => h('div'),
    },
  },
});
```

## 10.0 Configure Plugin Options
```
Props/Settings
Simply pass an object containing the props/settings field to configure them. To check out all available options, click here.
import Vue from 'vue';
import InfiniteLoading from 'vue-infinite-loading';

Vue.use(InfiniteLoading, {
  props: {
    spinner: 'default',
    /* other props need to configure */
  },
  system: {
    throttleLimit: 50,
    /* other settings need to configure */
  },
});
#
Slots
Unlike properties and settings, slot options can be either a string or a Vue Component:
import Vue from 'vue';
import InfiniteLoading from 'vue-infinite-loading';
import InfiniteError from 'path/to/your/components/InfiniteError';

Vue.use(InfiniteLoading, {
  slots: {
    noMore: 'No more message', // you can pass a string value
    error: InfiniteError, // you also can pass a Vue component as a slot
  },
});
```
