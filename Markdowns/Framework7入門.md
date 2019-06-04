Framework7入門
===
* knowledgeid: -LdLtaiBADqiIat-6k_3
* author: tei952
* authorid: iHmcxnnRDWPOJAE38On1nCdq0ir2

## 1.0 App HTML Layout
```

&lt;!DOCTYPE html&gt;</p>
<p><html>
  <head>
    <!-- Required meta tags-->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <!-- Color theme for statusbar -->
    <meta name="theme-color" content="#2196f3">
    <!-- Your app title -->
    <title>My App</title>
    <!-- Path to Framework7 Library CSS -->
    <link rel="stylesheet" href="path/to/framework7.min.css">
    <!-- Path to your custom app styles-->
    <link rel="stylesheet" href="path/to/my-app.css">
  </head>
  <body>
    <!-- App root element -->
    <div id="app">
      <!-- Statusbar overlay -->
      <div class="statusbar"></div></p>
  &lt;!-- Your main view, should have &quot;view-main&quot; class --&gt;
  &lt;div class=&quot;view view-main&quot;&gt;
    &lt;!-- Initial Page, &quot;data-name&quot; contains page name --&gt;
    &lt;div data-name=&quot;home&quot; class=&quot;page&quot;&gt;

      &lt;!-- Top Navbar --&gt;
      &lt;div class=&quot;navbar&quot;&gt;
        &lt;div class=&quot;navbar-inner&quot;&gt;
          &lt;div class=&quot;title&quot;&gt;Awesome App&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;!-- Toolbar --&gt;
      &lt;div class=&quot;toolbar&quot;&gt;
        &lt;div class=&quot;toolbar-inner&quot;&gt;
          &lt;!-- Toolbar links --&gt;
          &lt;a href=&quot;#&quot; class=&quot;link&quot;&gt;Link 1&lt;/a&gt;
          &lt;a href=&quot;#&quot; class=&quot;link&quot;&gt;Link 2&lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;!-- Scrollable page content --&gt;
      &lt;div class=&quot;page-content&quot;&gt;
        &lt;p&gt;Page content goes here&lt;/p&gt;
        &lt;!-- Link to another page --&gt;
        &lt;a href=&quot;/about/&quot;&gt;About app&lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;!-- Path to Framework7 Library JS--&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;path/to/framework7.min.js&quot;&gt;&lt;/script&gt;
&lt;!-- Path to your app js--&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;path/to/my-app.js&quot;&gt;&lt;/script&gt;
<p>  </body>
</html>

```
## 2.0 Initialize App:my-app.js
```
var app = new Framework7({
  // App root element
  root: &#39;#app&#39;,
  // App Name
  name: &#39;My App&#39;,
  // App id
  id: &#39;com.myapp.test&#39;,
  // Enable swipe panel
  panel: {
    swipe: &#39;left&#39;,
  },
  // Add default routes
  routes: [
    {
      path: &#39;/about/&#39;,
      url: &#39;about.html&#39;,
    },
  ],
  // ... other parameters
});
```
## 3.0 event:
```

var app = new Framework7({
  ...
  on: {
    // each object key means same name event handler
    pageInit: function (page) {
      // do something on page init
    },
    popupOpen: function (popup) {
      // do something on popup open
    },
  },
});</p>
<p>var popup = app.popup.create({
  ...
  on: {
    open: function (popup) {
      // do something on popup open
    }
  }
})

```
## 4.0 routers
```
var app = new Framework7({
  routes: [
    {
      name: &#39;about&#39;,
      path: &#39;/about/&#39;,
      url: &#39;./pages/about.html&#39;,
    },
    {
      name: &#39;news&#39;,
      path: &#39;/news/&#39;,
      url: &#39;./pages/news.html&#39;,
      options: {
        animate: false,
      },
    },
    {
      name: &#39;users&#39;,
      path: &#39;/users/&#39;,
      templateUrl: &#39;./pages/users.html&#39;,
      options: {
        context: {
          users: [&#39;John Doe&#39;, &#39;Vladimir Kharlampidi&#39;, &#39;Timo Ernst&#39;],
        },
      },
      on: {
        pageAfterIn: function (e, page) {
          // do something after page gets into the view
        },
        pageInit: function (e, page) {
          // do something when page initialized
        },
      }
    },
    // Default route, match to all pages (e.g. 404 page)
    {
      path: &#39;(.*)&#39;,
      url: &#39;./pages/404.html&#39;,
    },
  ],
});
```
## 5.0 router component:
```
routes = [
  // ...
  {
    path: &#39;/some-page/&#39;,
    // Component Object
    component: {
      template: `
        &lt;div class=&quot;page&quot;&gt;
          &lt;div class=&quot;navbar&quot;&gt;
            &lt;div class=&quot;navbar-inner&quot;&gt;
              &lt;div class=&quot;title&quot;&gt;{{title}}&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class=&quot;page-content&quot;&gt;
            &lt;a @click=&quot;openAlert&quot; class=&quot;red-link&quot;&gt;Open Alert&lt;/a&gt;
            &lt;div class=&quot;list simple-list&quot;&gt;
              &lt;ul&gt;
                {{#each names}}
                  &lt;li&gt;{{this}}&lt;/li&gt;
                {{/each}}
              &lt;/ul&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      `,
      style: `
        .red-link {
          color: red;
        }
      `,
      data: function () {
        return {
          title: &#39;Component Page&#39;,
          names: [&#39;John&#39;, &#39;Vladimir&#39;, &#39;Timo&#39;],
        }
      },
      methods: {
        openAlert: function () {
          var self = this;
          self.$app.dialog.alert(&#39;Hello world!&#39;);
        },
      },
      on: {
        pageInit: function (e, page) {
          // do something on page init
        },
        pageAfterOut: function (e, page) {
          // page has left the view
        },
      }
    },
  },
  // ...
]
```
## 6.0 view layout
```
`
```
## 7.0 Multiple Views Layout
```
`
```
## 8.0 App Methods &amp; Properties
```

var app = new Framework7({
  id: &#39;com.myapp.test&#39;,
  // Extended by Panel component:
  panel: {
    swipe: &#39;left&#39;,
    leftBreakpoint: 768,
    rightBreakpoint: 1024,
  },
  // Extended by Dialog component:
  dialog: {
    title: &#39;My App&#39;,
  },
  // Extended by Statusbar component:
  statusbar: {
    iosOverlaysWebview: true,
  },
});</p>
<p>// Open panel
app.panel.open(&#39;left&#39;);</p>
<p>// Hide statusbar
app.statusbar.hide();</p>
<p>app.on(&#39;panelOpen&#39;, function (panel) {
  console.log(&#39;Panel &#39; + panel.side + &#39; opened&#39;);
});

```
## 9.0 Accordion Vue Component
```
`
```
## 10.0 Action Sheet Vue Component
```

<!-- Actions --></p>
<p><f7-actions>
  <!-- Actions Group -->
  <f7-actions-group>
    <!-- Actions Label -->
    <f7-actions-label>Hello</f7-actions-label>
    <!-- Actions Buttons -->
    <f7-actions-button>Button 1</f7-actions-button>
    <f7-actions-button @click="doSomething">Button 2</f7-actions-button>
  </f7-actions-group>
  <!-- Another Group -->
  <f7-actions-group>
    <!-- Cancel/Close Button -->
    <f7-actions-button color="red" bold>Cancel</f7-actions-button>
  </f7-actions-group>
</f7-actions>

```
## 11.0 Badge Vue Component
```
`
```
## 12.0 Block Vue Component
```

<!-- Block --></p>
<p><f7-block>...</f7-block></p>
<!-- With extran highlighting and padding, additional "strong" prop -->
<p><f7-block strong>...</f7-block></p>
<!-- With block title -->
<p><f7-block-title>Block Title</f7-block-title></p>
<p><f7-block>...</f7-block></p>
<!-- Inset -->
<p><f7-block inset>...</f7-block></p>
<!-- With header and footer -->
<p><f7-block>
  <f7-block-header>Block Header</f7-block-header>
  ...
  <f7-block-footer>Block Footer</f7-block-footer>
</f7-block></p>
<!-- With header and footer outside -->
<p><f7-block-header>Block Header</f7-block-header></p>
<p><f7-block>
  ...
</f7-block></p>
<p><f7-block-footer>Block Footer</f7-block-footer></p>
<!-- With header after block title and footer outside-->
<p><f7-block-title>Block Title</f7-block-title></p>
<p><f7-block-header>Block Header</f7-block-header></p>
<p><f7-block>
  ...
</f7-block>

```
## 13.0 Button Vue Component
```
`
```
## 14.0 Card Vue Component
```

Minimal layout with extra content padding</p>
<p><f7-card title="Card Title" content="Card Content" footer="Card Footer"></f7-card>
Renders to:</p>
<div class="card">
  <div class="card-header">Card Title</div>
  <div class="card-content card-content-padding">Card Content</div>
  <div class="card-footer">Card Footer</div>
</div>
Minimal layout without extra content padding
<f7-card title="Card Title" content="Card Content" footer="Card Footer" :padding="false"></f7-card>
Renders to:
<div class="card">
  <div class="card-header">Card Title</div>
  <div class="card-content">Card Content</div>
  <div class="card-footer">Card Footer</div>
</div>
Custom Layout
<f7-card>
  <f7-card-header>Card header content</f7-card-header>
  <f7-card-content>
    <p>Card content</p>
  </f7-card-content>
  <f7-card-footer>Card footer content</f7-card-footer>
</f7-card>
Renders to:
<div class="card">
  <div class="card-header">Card header content</div>
  <div class="card-content">
    <p>Card content</p>
  </div>
  <div class="card-footer">Card footer content</div>
</div>
<code>## 15.0 Checkbox Vue Component</code>
Checkboxes List is not a separate component, but just a particular case of using <f7-list>, <f7-list-item>.
<f7-list>
  <!-- Additional "checkbox" prop to enable checkbox list item -->
  <f7-list-item checkbox value="check_1" checked title="Checkbox 1"></f7-list-item>
  <f7-list-item checkbox value="check_2" title="Checkbox 2"></f7-list-item>
</f7-list>
Checkbox v-model
v-model is not supported on Checkbox vue component. Instead, just use the combination of checked property and @change event:
<template>
  <!-- With boolean value -->
  <f7-checkbox :checked="jobIsDone" @change="jobIsDone = $event.target.checked"></f7-checkbox>

  <!-- With array value -->
  <f7-checkbox
    value="banana"
    :checked="fruits.indexOf('banana') >= 0"
    @change="checkFruits"
  ></f7-checkbox>

  <f7-checkbox
    value="orange"
    :checked="fruits.indexOf('orange') >= 0"
    @change="checkFruits"
  ></f7-checkbox>

  <f7-checkbox
    value="apple"
    :checked="fruits.indexOf('apple') >= 0"
    @change="checkFruits"
  ></f7-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        jobIsDone: false,
        fruits: [],
      };
    },
    methods: {
      checkFruits(event) {
        const self = this;
        const value = event.target.value;
        if (event.target.checked) {
          self.fruits.push(value);
        } else {
          self.fruits.splice(self.fruits.indexOf(value), 1);
        }
      },
    },
  };
</script>
Examples
<!-- Inline checkbox -->
<p>Lorem <f7-checkbox name="checkbox-1"></f7-checkbox> ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae illo nihil aut eius commodi sint eveniet aliquid eligendi <f7-checkbox name="checkbox-2" checked></f7-checkbox> ad delectus impedit tempore nemo, enim vel praesentium consequatur nulla mollitia!</p>

<!-- Checkboxes List -->
<f7-list>
  <f7-list-item checkbox title="Books" name="demo-checkbox" checked></f7-list-item>
  <f7-list-item checkbox title="Movies" name="demo-checkbox"></f7-list-item>
  <f7-list-item checkbox title="Food" name="demo-checkbox"></f7-list-item>
  <f7-list-item checkbox title="Drinks" name="demo-checkbox"></f7-list-item>
</f7-list>
<code>## 16.0 Chip Vue Component</code>
  <!-- Simple Chip -->
  <f7-chip text="Example Chip"></f7-chip>

  <!-- Colored Chip -->
  <f7-chip text="Another Chip" color="red"></f7-chip>

  <!-- Media Chip -->
  <f7-chip text="Jane Doe" media="J" media-bg-color="red"></f7-chip>

  <!-- Deleteable Chip -->
  <f7-chip text="Another Chip" deleteable @delete="onChipDelete"></f7-chip>

  <!-- Deleteable Media Chip -->
  <f7-chip text="Jane Doe" media-bg="red" deleteable @delete="onChipDelete">
    <img slot="media" src="http://lorempixel.com/100/100/people/9/">
  </f7-chip>

  <!-- With Icon -->
  <f7-chip text="Add Contact" color="blue">
    <f7-icon slot="media" f7="add_round"></f7-icon>
  </f7-chip>
<code>## 17.0 Contacts List Vue Component</code>
  <template>
    <f7-page>
      <f7-navbar back-link="Back" title="Contacts" sliding></f7-navbar>

      <f7-list contacts-list>
        <f7-list-group v-for="(group, key) in contacts">
          <f7-list-item :title="key" group-title></f7-list-item>
          <f7-list-item v-for="name in group" :title="name"></f7-list-item>
        </f7-list-group>
      </f7-list>

    </f7-page>
  </template>
  <script>
    export default {
      data: function () {
        return {
          contacts: {
            &#39;A&#39;: [
              &#39;Aaron&#39;,
              &#39;Abbie&#39;,
              &#39;Adam&#39;,
              &#39;Adele&#39;,
              &#39;Agatha&#39;,
              &#39;Agnes&#39;,
              &#39;Albert&#39;,
              &#39;Alexander&#39;
            ],
            &#39;B&#39;: [
              &#39;Bailey&#39;,
              &#39;Barclay&#39;,
              &#39;Bartolo&#39;,
              &#39;Bellamy&#39;,
              &#39;Belle&#39;,
              &#39;Benjamin&#39;
            ],
            &#39;C&#39;: [
              &#39;Caiden&#39;,
              &#39;Calvin&#39;,
              &#39;Candy&#39;,
              &#39;Carl&#39;,
              &#39;Cherilyn&#39;,
              &#39;Chester&#39;,
              &#39;Chloe&#39;
            ],
            &#39;V&#39;: [
              &#39;Vladimir&#39;
            ]
          }
        }
      }
    }
  </script>
<code>## 18.0 Floating Action Button Vue Component</code>
  Default FAB
  <f7-page>
    <!-- FAB must be direct child of a page -->
    <f7-fab color="pink" @click="doSomething">
      <f7-icon f7="add"></f7-icon>
    </f7-fab>
    ...
  </f7-page>
  Renders to:
  ...
  <div class="fab fab-right-bottom color-pink">
    <a href="#">
      <i class="icon f7-icons">add</i>
    </a>
  </div>
  ...
  Speed Dial
  <f7-page>
    <!-- FAB must be direct child of a page -->
    <f7-fab color="pink" @click="doSomething">
      <!-- First icon is visible when Speed Dial actions are closed -->
      <f7-icon f7="add"></f7-icon>
      <!-- Second icon is visible when Speed Dial actions are opened -->
      <f7-icon f7="close"></f7-icon>

      <!-- Speed Dial Buttons -->
      <f7-fab-buttons>
        <f7-fab-button color="orange" @click="onButtonClick">A</f7-fab-button>
        <f7-fab-button color="green" @click="onButtonClick">B</f7-fab-button>
        <f7-fab-button color="blue" @click="onButtonClick">C</f7-fab-button>
      </f7-fab-buttons>
    </f7-fab>
    ...
  </f7-page>
  Renders to:
  ...
  <div class="fab fab-right-bottom color-pink">
    <a href="#">
      <i class="icon f7-icons">add</i>
      <i class="icon f7-icons">close</i>
    </a>
    <div class="fab-buttons fab-buttons-top">
      <a href="#" class="color-orange">A</a>
      <a href="#" class="color-green">B</a>
      <a href="#" class="color-blue">C</a>
    </div>
  </div>
  ...
<code>## 19.0 Grid Vue Component</code>
Equal width columns
<f7-row>
  <f7-col>Col 1</f7-col>
  <f7-col>Col 2</f7-col>
  <f7-col>Col 3</f7-col>
</f7-row>
Renders to:
<div class="row">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
No gap and fixed size
<f7-row no-gap>
  <f7-col width="50">Col 50%</f7-col>
  <f7-col width="25">Col 25%</f7-col>
  <f7-col width="25">Col 25%</f7-col>
</f7-row>
Renders to:
<div class="row no-gap">
  <div class="col-50"></div>
  <div class="col-25"></div>
  <div class="col-25"></div>
</div>
Different columns width on tablet
<f7-row>
  <f7-col width="50" tablet-width="25">Col 1</f7-col>
  <f7-col width="50" tablet-width="25">Col 2</f7-col>
  <f7-col width="50" tablet-width="25">Col 3</f7-col>
  <f7-col width="50" tablet-width="25">Col 4</f7-col>
</f7-row>
Renders to:
<div class="row">
  <div class="col-50 tablet-25">Col 1</div>
  <div class="col-50 tablet-25">Col 2</div>
  <div class="col-50 tablet-25">Col 3</div>
  <div class="col-50 tablet-25">Col 4</div>
</div>
<code>## 20.0 Icon Vue Component</code>
<!-- Default back icon -->
<f7-icon icon="icon-back"></f7-icon>

<!-- Some custom icon -->
<f7-icon icon="icon-home"></f7-icon>

<!-- F7 Icons font icon -->
<f7-icon f7="home"></f7-icon>

<!-- Material Icons font icon -->
<f7-icon material="home"></f7-icon>

<!-- Font Awesome icons font icon -->
<f7-icon fa="home"></f7-icon>

<!-- Ionicons icons font icon -->
<f7-icon ion="home"></f7-icon>

<!-- F7 icons font icon with custom size and color -->
<f7-icon f7="home" size="44px" color="blue"></f7-icon>

<!-- Conditional icon -->
<f7-icon if-ios="f7:home" if-md="material:home"></f7-icon>
<code>## 21.0 Input / Form Elements Vue Components</code>
v-model is not supported on f7-input vue component. Instead, just use the combination of value property and @input event:
<template>
  ...
  <f7-list-item>
    <f7-label>Name</f7-label>
    <f7-input type="text" :value="name" @input="name = $event.target.value" placeholder="Your name" clear-button></f7-input>
  </f7-list-item>
  ...
</template>
<script>
  export default {
    data() {
      name: &#39;&#39;,
    },
    ...
  };
</script>
Examples
Full Layout / Inline Labels
<f7-list inline-labels no-hairlines-md>
  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Name</f7-label>
    <f7-input type="text" placeholder="Your name" :value="value" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Password</f7-label>
    <f7-input type="password" placeholder="Your password" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>E-mail</f7-label>
    <f7-input type="email" placeholder="Your e-mail" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>URL</f7-label>
    <f7-input type="url" placeholder="URL" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Phone</f7-label>
    <f7-input type="tel" placeholder="Your phone number" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Gender</f7-label>
    <f7-input type="select" placeholder="Please choose...">
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Birthday</f7-label>
    <f7-input type="date" value="2014-04-30" placeholder="Please choose..."></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Date time</f7-label>
    <f7-input type="datetime-local" placeholder="Please choose..."></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Range</f7-label>
    <f7-input type="range" value="50" min="0" max="100" step="1"></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Textarea</f7-label>
    <f7-input type="textarea" placeholder="Bio"></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Resizable</f7-label>
    <f7-input type="textarea" resizable placeholder="Bio"></f7-input>
  </f7-list-item>

</f7-list>
Full Layout / Stacked Labels
<f7-list no-hairlines-md>
  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Name</f7-label>
    <f7-input type="text" placeholder="Your name" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Password</f7-label>
    <f7-input type="password" placeholder="Your password" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>E-mail</f7-label>
    <f7-input type="email" placeholder="Your e-mail" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>URL</f7-label>
    <f7-input type="url" placeholder="URL" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Phone</f7-label>
    <f7-input type="tel" placeholder="Your phone number" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Gender</f7-label>
    <f7-input type="select" placeholder="Please choose...">
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Birthday</f7-label>
    <f7-input type="date" value="2014-04-30" placeholder="Please choose..."></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Date time</f7-label>
    <f7-input type="datetime-local" placeholder="Please choose..."></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Range</f7-label>
    <f7-input type="range" value="50" min="0" max="100" step="1"></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Textarea</f7-label>
    <f7-input type="textarea" placeholder="Bio"></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Resizable</f7-label>
    <f7-input type="textarea" resizable placeholder="Bio"></f7-input>
  </f7-list-item>
</f7-list>
Floating Labels (MD-theme only)
<f7-list no-hairlines-md>
  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label floating>Name</f7-label>
    <f7-input type="text" placeholder="Your name" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label floating>Password</f7-label>
    <f7-input type="password" placeholder="Your password" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label floating>E-mail</f7-label>
    <f7-input type="email" placeholder="Your e-mail" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label floating>URL</f7-label>
    <f7-input type="url" placeholder="URL" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label floating>Phone</f7-label>
    <f7-input type="tel" placeholder="Your phone number" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label floating>Bio</f7-label>
    <f7-input type="textarea" placeholder="Bio" resizable></f7-input>
  </f7-list-item>
</f7-list>
Validation + Additional Info
<f7-list no-hairlines-md>
  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Name</f7-label>
    <f7-input type="text" placeholder="Your name" info='Default "required" validation' required validate clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Fruit</f7-label>
    <f7-input type="text" placeholder="Type 'apple' or 'banana'" required validate clear-button>
      <span slot="info">Pattern validation (<b>apple|banana</b>)</span>
    </f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>E-mail</f7-label>
    <f7-input type="email" placeholder="Your e-mail" info='Default e-mail validation' required validate clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>URL</f7-label>
    <f7-input type="url" placeholder="Your URL" info='Default URL validation' required validate clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-label>Number</f7-label>
    <f7-input type="text" placeholder="Enter number" info='With custom error message' error-message="Only numbers please!" required validate pattern="[0-9]*" clear-button></f7-input>
  </f7-list-item>

</f7-list>
Icon + Input
<f7-list no-hairlines-md>
  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-input type="text" placeholder="Your name" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-input type="password" placeholder="Your password" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-input type="email" placeholder="Your e-mail" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <f7-input type="url" placeholder="URL" clear-button></f7-input>
  </f7-list-item>

</f7-list>
Label + Input
<f7-list no-hairlines-md>
  <f7-list-item>
    <f7-label>Name</f7-label>
    <f7-input type="text" placeholder="Your name" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-label>Password</f7-label>
    <f7-input type="password" placeholder="Your password" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-label>E-mail</f7-label>
    <f7-input type="email" placeholder="Your e-mail" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-label>URL</f7-label>
    <f7-input type="url" placeholder="URL" clear-button></f7-input>
  </f7-list-item>
</f7-list>
Only Inputs
<f7-list no-hairlines-md>
  <f7-list-item>
    <f7-input type="text" placeholder="Your name" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-input type="password" placeholder="Your password" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-input type="email" placeholder="Your e-mail" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-input type="url" placeholder="URL" clear-button></f7-input>
  </f7-list-item>
</f7-list>
Inputs + Additional Info
<f7-list no-hairlines-md>
  <f7-list-item>
    <f7-input type="text" placeholder="Your name" info="Full name please" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-input type="password" placeholder="Your password" info="8 characters minimum" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-input type="email" placeholder="Your e-mail" info="Your work e-mail address" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-input type="url" placeholder="URL" info="Your website URL" clear-button></f7-input>
  </f7-list-item>
</f7-list>
Only Inputs Inset
<f7-list inset>
  <f7-list-item>
    <f7-input type="text" placeholder="Your name" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-input type="password" placeholder="Your password" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-input type="email" placeholder="Your e-mail" clear-button></f7-input>
  </f7-list-item>

  <f7-list-item>
    <f7-input type="url" placeholder="URL" clear-button></f7-input>
  </f7-list-item>
</f7-list>
<code>## 22.0 Link Vue Component</code>
Navigation Link
<f7-link href="/about/">About</f7-link>

<!-- Renders to: -->

<a href="/about/" class="link">About</a>
Back Navigation Link
<f7-link back>Back</f7-link>

<!-- Renders to: -->

<a href="#" class="link back">Back</a>
With Router Parameters
<f7-link href="/about/" :animate="false" :ignore-cache="true">About</f7-link>

<!-- Renders to: -->

<a href="/about/" class="link" data-animate="false" data-ignore-cache="true">About</a>
External Link
<f7-link href="http://google.com" external>Google</f7-link>

<!-- Renders to: -->

<a href="http://google.com" class="link external">Google</a>
Tab Link
<!-- Tabs -->
<f7-tabs>
  <f7-tab id="tab-1" tab-active>Tab 1</f7-tab>
  <f7-tab id="tab-1">Tab 2</f7-tab>
</f7-tabs>
<!-- Switch Between Tabs -->
<f7-link tab-link="#tab-1" tab-link-active>Show Tab 1</f7-link>
<f7-link tab-link="#tab-2">Show Tab 2</f7-link>

<!-- Renders to: -->

<!-- Tabs -->
<div class="tabs">
  <div class="tab tab-active" id="tab-1">Tab 1</div>
  <div class="tab" id="tab-2">Tab 2</div>
</div>
<!-- Switch Between Tabs -->
<a href="#" data-tab="#tab-1" class="tab-link tab-link-active">Show Tab 1</a>
<a href="#" data-tab="#tab-2" class="tab-link">Show Tab 2</a>
Routable Tabs
<!-- Tabs -->
<f7-tabs>
  <f7-tab id="tab-1"></f7-tab>
  <f7-tab id="tab-2"></f7-tab>
</f7-tabs>
<!-- Switch Between Tabs -->
<f7-link tab-link route-tab-id="tab-1" href="/tabs/">Show Tab 1</f7-link>
<f7-link tab-link route-tab-id="tab-2" href="/tabs/tab-2/">Show Tab 2</f7-link>

<!-- Renders to: -->

<!-- Tabs -->
<div class="tabs">
  <div class="tab" id="tab-1"></div>
  <div class="tab" id="tab-2"></div>
</div>
<!-- Switch Between Tabs -->
<a href="/tabs/" class="tab-link" data-route-tab-id="tab-1">Show Tab 1</a>
<a href="/tabs/tab-2/" class="tab-link" data-route-tab-id="tab-2">Show Tab 2</a>

Open And Close Panel
<f7-link panel-open="left">Open Left Panel</f7-link>
<f7-link panel-close>Close Panel</f7-link>

<!-- Renders to: -->

<a href="#" data-panel="left" class="link panel-open">Open Left Panel</a>
<a href="#" class="link panel-close">Close Panel</a>
Open and Close Popup
<f7-link popup-open="#my-popup">Open Popup</f7-link>
<f7-link popup-close="#my-popup">Close Popup</f7-link>

<!-- Renders to: -->

<a href="#" data-popup="#my-popup" class="link popup-open">Open Popup</a>
<a href="#" data-popup="#my-popup" class="link popup-close">Close Popup</a>
With Icon &amp; Color
<f7-link icon-f7="home" text="Home" color="red"></f7-link>

<!-- Renders to: -->

<a href="#" class="link color-red">
  <i class="icon f7-icons">home</i>
  <span>Home</span>
</a>
<code>## 23.0 List Vue Component</code>
Minimal Layout
<f7-list>
  <f7-list-item title="Item 1"></f7-list-item>
  <f7-list-item title="Item 2"></f7-list-item>
</f7-list>
Renders to:
<div class="list">
  <ul>
    <li class="item-content">
      <div class="item-inner">
        <div class="item-title">Item 1</div>
      </div>
    </li>
    <li class="item-content">
      <div class="item-inner">
        <div class="item-title">Item 2</div>
      </div>
    </li>
  </ul>
</div>
With Groups
<f7-list>
  <f7-list-group>
    <f7-list-item title="Group 1" group-title></f7-list-item>
    <f7-list-item title="Item 1"></f7-list-item>
    <f7-list-item title="Item 2"></f7-list-item>
  </f7-list-group>
  <f7-list-group>
    <f7-list-item title="Group 2" group-title></f7-list-item>
    <f7-list-item title="Item 1"></f7-list-item>
    <f7-list-item title="Item 2"></f7-list-item>
  </f7-list-group>
</f7-list>
Renders to:
<div class="list">
  <div class="list-group">
    <ul>
      <li class="list-group-title"><span>Group 1</span></li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">Item 1</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">Item 2</div>
        </div>
      </li>
    </ul>
  </div>
  <div class="list-group">
    <ul>
      <li class="list-group-title"><span>Group 2</span></li>
      ...
    </ul>
  </div>
</div>
Media List
<f7-list media-list>
  <f7-list-item title="Item 1" subtitle="Subtitle 1" text="Item 1 Text"></f7-list-item>
  <f7-list-item title="Item 1" subtitle="Subtitle 2" text="Item 2 Text"></f7-list-item>
</f7-list>
Renders to:
<div class="list media-list">
  <ul>
    <li class="item-content">
      <div class="item-inner">
        <div class="item-title-row">
          <div class="item-title">Item 1</div>
        </div>
        <div class="item-subtitle">Subtitle 1</div>
        <div class="item-text">Item 1 Text</div>
      </div>
    </li>
    <li class="item-content">
      <div class="item-inner">
        <div class="item-title-row">
          <div class="item-title">Item 1</div>
        </div>
        <div class="item-subtitle">Subtitle 1</div>
        <div class="item-text">Item 1 Text</div>
      </div>
    </li>
  </ul>
</div>
With Block Footer
<f7-list>
  <f7-list-item title="Item 1"></f7-list-item>
  <f7-list-item title="Item 2"></f7-list-item>
  <f7-block-footer>List Footer</f7-block-footer>
</f7-list>
Renders to:
<div class="list">
  <ul>
    <li class="item-content">
      <div class="item-inner">
        <div class="item-title">Item 1</div>
      </div>
    </li>
    <li class="item-content">
      <div class="item-inner">
        <div class="item-title">Item 2</div>
      </div>
    </li>
  </ul>
  <div class="block-footer">List Footer</div>
</div>
<code>## 24.0 List Item Vue Component</code>
<f7-list media-list>
  <f7-list-item
    link="/home/"
    title="Item Title"
    subtitle="Item Subtitle"
    text="Text"
    after="Read more"
    >
      <img src="path-to-my-image.jpg" slot="media">
      <div slot="root-start">Root Start</div>
      <div slot="root">Root End</div>
      <div slot="content-start">Content Start</div>
      <div slot="content">Content End</div>
      <div slot="media-start">Media Start</div>
      <div slot="media">Media</div>
      <span slot="after-start">After Start</span>
      <span slot="after">After End</span>
      <div slot="inner-start">Inner Start</div>
      <div slot="inner">Inner End</div>
      <div slot="before-title">Before Title</div>
      <div slot="after-title">After Title</div>
  </f7-list-item>
</f7-list>

<!-- Renders to: -->

<div class="list media-list">
  <ul>
    <li>
      <div>Root Start</div>
      <a href="/home/" class="item-link">
        <div class="item-content">
          <div>Content Start</div>
          <div class="item-media">
            <img src="path-to-my-image.jpg">
          </div>
          <div class="item-inner">
            <div>Inner Start</div>
            <div class="item-title-row">
              <div>Before Title</div>
              <div class="item-title">Item Title</div>
              <div>After Title</div>
              <div class="item-after">
                <span>After Start</span>
                <span>Read more</span>
                <span>After End</span>
              </div>
            </div>
            <div class="item-subtitle">Item Subtitle</div>
            <div class="item-text">Text</div>
            <div>Inner End</div>
          </div>
          <div>Content End</div>
        </div>
      </a>
      <div>Root End</div>
    </li>
  </ul>
</div>
Examples
Minimal Layout
<f7-list>
  <f7-list-item title="Item 1"></f7-list-item>
  <f7-list-item title="Item 2"></f7-list-item>
</f7-list>
<!-- Renders to: -->


<div class="list">
  <ul>
    <li class="item-content">
      <div class="item-inner">
        <div class="item-title">Item 1</div>
      </div>
    </li>
    <li class="item-content">
      <div class="item-inner">
        <div class="item-title">Item 2</div>
      </div>
    </li>
  </ul>
</div>
With Badges And Divider
<f7-list>
  <f7-list-item title="Item 1" badge="5" badge-color="red"></f7-list-item>
  <f7-list-item title="Item 2" badge="3" badge-color="red"></f7-list-item>
  <f7-list-item title="Items Divider" divider></f7-list-item>
  <f7-list-item title="Item 3"></f7-list-item>
  ...
</f7-list>

<!-- Renders to: -->

<div class="list">
  <ul>
    <li class="item-content">
      <div class="item-inner">
        <div class="item-title">Item 1</div>
        <div class="item-after">
          <span class="badge color-red">5</span>
        </div>
      </div>
    </li>
    <li class="item-content">
      <div class="item-inner">
        <div class="item-title">Item 2</div>
        <div class="item-after">
          <span class="badge color-red">3</span>
        </div>
      </div>
    </li>
    <li class="item-divider"><span>Items Divider</span></li>
    <li class="item-content">
      <div class="item-inner">
        <div class="item-title">Item 3</div>
      </div>
    </li>
  </ul>
</div>
Links Items
<f7-list>
  <f7-list-item link="/about/" title="About"></f7-list-item>
  <f7-list-item link="/contacts/" title="Contacts"></f7-list-item>
</f7-list>

<!-- Renders to: -->

<div class="list">
  <ul>
    <li>
      <a href="/about/" class="item-link">
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title">About</div>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a href="/contacts/" class="item-link">
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title">Contacts</div>
          </div>
        </div>
      </a>
    </li>
  </ul>
</div>
Media List Items
<f7-list media-list>
  <f7-list-item
    link="/item/"
    media="path/to/image.jpg"
    title="Item Title"
    subtitle="Item Subtitle"
    text="Some text"
    after="Read more"
  ></f7-list-item>
</f7-list>

<!-- Renders to: -->

<div class="list media-list">
  <ul>
    <li>
      <a href="/item/" class="item-link">
        <div class="item-content">
          <div class="item-media">
            <img src="path/to/image.jpg">
          </div>
          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title">Item Title</div>
              <div class="item-after">Read more</div>
            </div>
            <div class="item-subtitle">Item Subtitle</div>
            <div class="item-text">Some text</div>
          </div>
        </div>
      </a>
    </li>
  </ul>
</div>
Custom Table-like Elements
<f7-list-item>
  <f7-list-item-cell>
    <f7-list-item-row>
      <f7-list-item-cell>Cell 1-1</f7-list-item-cell>
      <f7-list-item-cell>Cell 1-2</f7-list-item-cell>
      <f7-list-item-cell>Cell 1-3</f7-list-item-cell>
    </f7-list-item-row>
    <f7-list-item-row>
      <f7-list-item-cell>Cell 2-1</f7-list-item-cell>
      <f7-list-item-cell>Cell 2-2</f7-list-item-cell>
    </f7-list-item-row>
    <f7-list-item-row>
      <f7-list-item-cell>Cell 3-1</f7-list-item-cell>
      <f7-list-item-cell>
        <f7-list-item-row>
          Cell 3-2
        </f7-list-item-row>
        <f7-list-item-row>
          Cell 3-3
        </f7-list-item-row>
      </f7-list-item-cell>
    </f7-list-item-row>
  </f7-list-item-cell>
</f7-list-item>
<code>## 25.0 List Button Vue Component</code>
Minimal Layout
<f7-list>
  <f7-list-button>Button 1</f7-list-button>
  <f7-list-button>Button 2</f7-list-button>
</f7-list>

<!-- Renders to: -->

<div class="list">
  <ul>
    <li>
      <a href="#" class="item-link list-button">Button 1</a>
    </li>
    <li>
      <a href="#" class="item-link list-button">Button 2</a>
    </li>
  </ul>
</div>
Color Buttons
<f7-list>
  <f7-list-button color="red">Red Button</f7-list-button>
  <f7-list-button color="green">Green Button</f7-list-button>
</f7-list>
Control Buttons in Inset List
<f7-list inset>
  <f7-list-button panel-open="left">Open Panel</f7-list-button>
  <f7-list-button popup-open="#my-popup">Open Popup</f7-list-button>
</f7-list>
<code>## 26.0 List Index Vue Component</code>
<f7-page>
  <f7-navbar title="List Index" back-link="Back"></f7-navbar>

  <!-- List Index -->
  <f7-list-index
    indexes="auto"
    list-el="#contacts-list"
    :scroll-list="true"
    :label="true"
    @listindex:select="onIndexSelect"
  ></f7-list-index>

  <!-- Contacts list -->
  <f7-list contacts-list id="contacts-list">
    <f7-list-group>
      <f7-list-item title="A" group-title></f7-list-item>
      <f7-list-item title="Aaron"></f7-list-item>
      <f7-list-item title="Adam"></f7-list-item>
      <f7-list-item title="Aiden"></f7-list-item>
      ...
    </f7-list-group>
    <f7-list-group>
      <f7-list-item title="B" group-title></f7-list-item>
      <f7-list-item title="Benjamin"></f7-list-item>
      <f7-list-item title="Blake"></f7-list-item>
      <f7-list-item title="Bobby"></f7-list-item>
    </f7-list-group>
    <f7-list-group>
      <f7-list-item title="C" group-title></f7-list-item>
      <f7-list-item title="Caleb"></f7-list-item>
      <f7-list-item title="Callum"></f7-list-item>
      <f7-list-item title="Cameron"></f7-list-item>
      ...
    </f7-list-group>
    ...
    <f7-list-group>
      <f7-list-item title="Z" group-title></f7-list-item>
      <f7-list-item title="Zachary"></f7-list-item>
    </f7-list-group>
  </f7-list>
</f7-page>
<code>## 27.0 Login Screen Vue Component</code>
Examples
<!-- Login Screen -->
<f7-login-screen>
  <!-- Login Screen title -->
  <f7-login-screen-title>Title</f7-login-screen-title>
  <!-- Login Screen content goes here -->
</f7-login-screen>
Renders to:
<!-- Login Screen -->
<div class="login-screen">
  <!-- Login Screen title -->
  <div class="login-screen-title">Title</div>
  <!-- Login Screen content goes here -->
</div>
Full Screen Layout
According to Login Screen Layout here is the recommended Login Screen layout structure:
<f7-login-screen>
  <f7-view>
    <f7-page login-screen>
      <f7-login-screen-title>My App</f7-login-screen-title>
      <f7-list form>
        <f7-list-item>
          <f7-label>Username</f7-label>
          <f7-input type="text" placeholder="Your username"></f7-input>
        </f7-list-item>
        <f7-list-item>
          <f7-label>Password</f7-label>
          <f7-input type="password" placeholder="Your password"></f7-input>
        </f7-list-item>
      </f7-list>
      <f7-list>
        <f7-list-button login-screen-close>Sign In</f7-list-button>
        <f7-block-footer>Click Sign In to close Login Screen</f7-block-footer>
      </f7-list>
    </f7-page>
  </f7-view>
</f7-login-screen>
Where:
<f7-login-screen-title>My App</f7-login-screen-title> - additional component with Login Screen title
<f7-page login-screen> - additional boolean login-screen property on page component to add extra styling to page form elements
<code>## 28.0 Messagebar Vue Component</code>
Messagebar Vue component has additional slots for custom elements:
default - element will be inserted in the end of <div class="toolbar-inner"> 
before-area - element will be inserted right before textarea. Messagebar attachments go here
after-area - element will be inserted right after textarea
send-link - element will be inserted inside of send link
before-inner - element will be inserted right before <div class="toolbar-inner"> 
after-inner - element will be inserted right after <div class="toolbar-inner"> 
inner-start - element will be inserted in the beginning of <div class="toolbar-inner"> 
inner-end - element will be inserted in the end of <div class="toolbar-inner">default slot
<f7-messagebar placeholder="Message" @submit="onSubmit">
  <div slot="before-inner">Before inner</div>
  <div slot="after-inner">After inner</div>
  <div slot="before-area">Before textarea</div>
  <div slot="after-area">After textarea</div>
  <f7-icon if-ios="f7:arrow_up_fill" if-md="material:send" slot="send-link"></f7-icon>
  <div>Default slot</div>
</f7-messagebar>
Renders to:
<div class="toolbar messagebar">
  <div>Before inner</div>
  <div class="toolbar-inner">
    <div class="messagebar-area">
      <div>Before textarea</div>
      <textarea placeholder="Message"></textarea>
      <div>After textarea</div>
    </div>
    <a href="#" class="link"><i class="icon f7-icons">arrow_up_fill</i></a>
    <div>Default slot</div>
  </div>
  <div>After inner</div>
</div>
Access To Messagebar Instance
If you use automatic initalization to init Messagebar (with init:true prop) and need to use its Methods and Properties you can access its initialized instance by accessing .f7Messagebar component&#39;s property.
Examples
<f7-messagebar placeholder="Message" send-link="Send" @submit="onSubmit"></f7-messagebar>

<!-- Renders to: -->

<div class="toolbar messagebar">
  <div class="toolbar-inner">
    <div class="messagebar-area">
      <textarea placeholder="Message"></textarea>
    </div>
    <a href="#" class="link">Send</a>
  </div>
</div>
With Sheet And Attachments
<template>
  <f7-page>
    <f7-navbar title="Messsages" back-link="Back"></f7-navbar>

    <f7-messagebar
      :placeholder="placeholder"
      ref="messagebar"
      :attachmentsVisible="attachmentsVisible"
      :sheetVisible="sheetVisible"
    >
      <!-- Link to toggle Sheet -->
      <f7-link
        icon-if-ios="f7:camera_fill"
        icon-if-md="material:camera_alt"
        slot="inner-start"
        @click="sheetVisible = !sheetVisible"
      ></f7-link>
      <!-- Send Message Link -->
      <f7-link
        icon-if-ios="f7:arrow_up_fill"
        icon-if-md="material:send"
        slot="inner-end"
        @click="sendMessage"
      ></f7-link>
      <!-- Attachments -->
      <f7-messagebar-attachments>
        <f7-messagebar-attachment
          v-for="(image, index) in attachments"
          :key="index"
          :image="image"
          @attachment:delete="deleteAttachment(image)"
        ></f7-messagebar-attachment>
      </f7-messagebar-attachments>
      <!-- Sheet -->
      <f7-messagebar-sheet>
        <f7-messagebar-sheet-image
          v-for="(image, index) in images"
          :key="index"
          :image="image"
          :checked="attachments.indexOf(image) >= 0"
          @change="handleAttachment"
        ></f7-messagebar-sheet-image>
      </f7-messagebar-sheet>
    </f7-messagebar>

    <f7-messages>
      ...
    </f7-messages>
  </f7-page>
</template>
<script>
  export default {
    data() {
      return {
        attachments: [],
        sheetVisible: false,
        // Sheet images available
        images: [
          &#39;http://lorempixel.com/300/300/cats/1/&#39;,
          &#39;http://lorempixel.com/200/300/cats/2/&#39;,
          &#39;http://lorempixel.com/400/300/cats/3/&#39;,
          &#39;http://lorempixel.com/300/150/cats/4/&#39;,
          &#39;http://lorempixel.com/150/300/cats/5/&#39;,
          &#39;http://lorempixel.com/300/300/cats/6/&#39;,
          &#39;http://lorempixel.com/300/300/cats/7/&#39;,
          &#39;http://lorempixel.com/200/300/cats/8/&#39;,
          &#39;http://lorempixel.com/400/300/cats/9/&#39;,
          &#39;http://lorempixel.com/300/150/cats/10/&#39;,
        ],
      };
    },
    computed: {
      attachmentsVisible() {
        const self = this;
        return self.attachments.length &gt; 0;
      },
      placeholder() {
        const self = this;
        return self.attachments.length &gt; 0 ? &#39;Add comment or Send&#39; : &#39;Message&#39;;
      },
    },
    methods: {
      deleteAttachment(image) {
        const self = this;
        const index = self.attachments.indexOf(image);
        self.attachments.splice(index, 1)[0]; // eslint-disable-line
      },
      handleAttachment(e) {
        const self = this;
        const index = self.$$(e.target).parents(&#39;label.checkbox&#39;).index();
        const image = self.images[index];
        if (e.target.checked) {
          // Add to attachments
          self.attachments.unshift(image);
        } else {
          // Remove from attachments
          self.attachments.splice(self.attachments.indexOf(image), 1);
        }
      },
      sendMessage() {
        const self = this;
        const text = self.messagebar.getValue().replace(/\n/g, &#39;<br>&#39;).trim();
        // the rest of logic to send a message
      },
      onF7Ready() {
        const self = this;
        self.messagebar = self.$refs.messagebar.f7Messagebar;
      },
    },
  };
</script>
<code>## 29.0 Messages Component</code>
<f7-message
  type="sent"
  text="Hello World"
  name="John Doe"
  avatar="path/to/image.jpg"
>
  <div slot="start">Start</div>
  <div slot="end">End</div>
  <div slot="content-start">Content Start</div>
  <div slot="content-end">Content End</div>
  <div slot="bubble-start">Bubble Start</div>
  <div slot="bubble-end">Bubble End</div>
</f7-message>

<!-- Renders to: -->

<div class="message message-sent">
  <div>Start</div>
  <div class="message-avatar" style="background-image: url(path/to/image.jpg);"></div>
  <div class="message-content">
    <div>Content Start</div>
    <div class="message-name">John Doe</div>
    <div class="message-bubble">
      <div>Bubble Start</div>
      <div class="message-text">Hello World</div>
      <div>Bubble End</div>
    </div>
    <div>Content End</div>
  </div>
  <div>End</div>
</div>
<code>## 30.0 Navbar Vue Component</code>
<f7-navbar title="My App">
  <div slot="before-inner">Before Inner</div>
  <div slot="after-inner">After Inner</div>
  <div>Default slot</div>
</f7-navbar>

<!-- Renders to: -->

<div class="navbar">
  <div>Before Inner</div>
  <div class="navbar-inner">
    <div class="title">My App</div>
    <div>Default slot</div>
  </div>
  <div>After Inner</div>
</div>
Examples
Minimal layout
<f7-navbar title="My App"></f7-navbar>

<!-- Renders to: -->

<div class="navbar">
  <div class="navbar-inner sliding">
    <div class="title">My App</div>
  </div>
</div>
Minimal layout with back link
<f7-navbar title="My App" back-link="Back"></f7-navbar>

<!-- Renders to: -->

<div class="navbar">
  <div class="navbar-inner sliding">
    <div class="left">
      <a href="#" class="back link">
        <i class="icon icon-back"></i>
        <!-- Back link text rendered only for iOS theme -->
        <span>Back</span>
      </a>
    </div>
    <div class="title">My App</div>
  </div>
</div>
Without &quot;sliding&quot; transition effect (affects iOS theme only)
<f7-navbar title="My App" back-link="Back" :sliding="false"></f7-navbar>

<!-- Renders to: -->

<div class="navbar">
  <div class="navbar-inner">
    <div class="left">
      <a href="#" class="back link">
        <i class="icon icon-back"></i>
        <!-- Back link text rendered only for iOS theme -->
        <span>Back</span>
      </a>
    </div>
    <div class="title">My App</div>
  </div>
</div>
With additional right link to open right panel
<f7-navbar title="My App" back-link="Back">
  <f7-nav-right>
    <f7-link icon="icon-bars" panel-open="right"></f7-link>
  </f7-nav-right>
</f7-navbar>

<!-- Renders to: -->

<div class="navbar">
  <div class="navbar-inner sliding">
    <div class="left">
      <a href="#" class="back link">
        <i class="icon icon-back"></i>
        <!-- Back link text rendered only for iOS theme -->
        <span>Back</span>
      </a>
    </div>
    <div class="title">My App</div>
    <div class="right">
      <a href="#" class="link panel-open" data-panel="right">
        <i class="icon icon-bars"></i>
      </a>
    </div>
  </div>
</div>
All three parts
<f7-navbar>
  <f7-nav-left back-link="Back"></f7-nav-left>
  <f7-nav-title>My App</f7-nav-title>
  <f7-nav-right>
    <f7-link icon="icon-bars" panel-open="right"></f7-link>
  </f7-nav-right>
</f7-navbar>

<!-- Renders to: -->

<div class="navbar">
  <div class="navbar-inner sliding">
    <div class="left">
      <a href="#" class="back link">
        <i class="icon icon-back"></i>
        <!-- Back link text rendered only for iOS theme -->
        <span>Back</span>
      </a>
    </div>
    <div class="title">My App</div>
    <div class="right">
      <a href="#" class="link panel-open" data-panel="right">
        <i class="icon icon-bars"></i>
      </a>
    </div>
  </div>
</div>
Full custom layout
<f7-navbar>
  <f7-nav-left>
    <f7-link>Left Link</f7-link>
  </f7-nav-left>
  <f7-nav-title>My App</f7-nav-title>
  <f7-nav-right>
    <f7-link>Right Link</f7-link>
  </f7-nav-right>
</f7-navbar>

<!-- Renders to: -->

<div class="navbar">
  <div class="navbar-inner sliding">
    <div class="left">
      <a href="#" class="link">Left Link</a>
    </div>
    <div class="title">My App</div>
    <div class="right">
      <a href="#" class="link">Right Link</a>
    </div>
  </div>
</div>
<code>## 31.0 Page Vue Component</code>
<f7-page>
  <div slot="fixed">Fixed element</div>
  <p>Page content goes here</p>
</f7-page>

<!-- Renders to: -->

<div class="page">
  <div>Fixed element</div>
  <div class="page-content">
    <p>Page content goes here</p>
  </div>
</div>
Examples
Minimal layout
<f7-page name="home">
  <p>Page content</p>
</f7-page>

<!-- Renders to: -->

<div class="page" data-name="home">
  <div class="page-content">
    <p>Page content</p>
  </div>
</div>
With Navbar
<f7-page name="home">
  <f7-navbar title="My App"></f7-navbar>
  <p>Page content</p>
</f7-page>

<!-- Renders to: -->

<div class="page" data-name="home">
  <div class="navbar">
    <div class="navbar-inner sliding">
      <div class="title">My App</div>
    </div>
  </div>
  <div class="page-content">
    <p>Page content</p>
  </div>
</div>
Pull To Refresh
<f7-page ptr @ptr:refresh="onRefresh">
  <f7-navbar title="My App"></f7-navbar>
  <p>Page content</p>
</f7-page>

<!-- Renders to: -->

<div class="page">
  <div class="navbar">
    <div class="navbar-inner sliding">
      <div class="title">My App</div>
    </div>
  </div>
  <div class="page-content ptr-content">
    <div class="ptr-preloader">
      <div class="preloader"></div>
      <div class="ptr-arrow"></div>
    </div>
    <p>Page content</p>
  </div>
</div>
Infinite Scroll
<f7-page infinite @infinite="onInfiniteScroll">
  <f7-navbar title="My App"></f7-navbar>
  <p>Page content</p>
</f7-page>

<!-- Renders to: -->

<div class="page">
  <div class="navbar">
    <div class="navbar-inner sliding">
      <div class="title">My App</div>
    </div>
  </div>
  <div class="page-content infinite-scroll-content">
    <p>Page content</p>
    <div class="preloader infinite-scroll-preloader"></div>
  </div>
</div>
Page Content as Tabs
<f7-page tabs :page-content="false">
  <f7-navbar title="My App"></f7-navbar>
  <f7-page-content tab tab-active id="tab-1">Tab 1 Content ...</f7-page-content>
  <f7-page-content tab id="tab-2">Tab 2 Content ...</f7-page-content>
  <f7-page-content tab id="tab-3">Tab 3 Content ...</f7-page-content>
</f7-page>

<!-- Renders to: -->

<div class="page">
  <div class="navbar">
    <div class="navbar-inner sliding">
      <div class="title">My App</div>
    </div>
  </div>
  <div id="tab-1" class="page-content tab tab-active">
    Tab 1 Content ...
  </div>
  <div id="tab-2" class="page-content tab">
    Tab 2 Content ...
  </div>
  <div id="tab-3" class="page-content tab">
    Tab 3 Content ...
  </div>
</div>
<code>## 32.0 Panel Vue Component</code>
!-- Left Panel with Reveal effect --&gt;
<f7-panel left reveal>
  <!-- Left panel content goes here -->
</f7-panel>

<!-- Right Panel with Cover effect and dark layout theme -->
<f7-panel right cover class="theme-dark">
  <!-- Right panel content goes here -->
</f7-panel>
Renders to:
<div class="panel panel-left panel-reveal">
  ...
</div>
<div class="panel panel-right panel-cover theme-dark">
  ...
</div>
<code>## 33.0 Photo Browser Vue Component</code>
Here is how it can be used in Vue component and how to control it:
<template>

  <!-- Photo Browser -->
  <f7-photo-browser
    ref="pb"
    :photos="photos"
    theme="dark"
    @open="onOpen"
  ></f7-photo-browser>

  <!-- Link To Open PB -->
  <f7-link @click="openPhotoBrowser">Photos</f7-link>

</template>

<script>
  export default {
    data: function () {
      return {
        photos: [
          {
            url: &#39;path/to/picture-1.jpg&#39;,
            caption: &#39;Picture 1&#39;
          },
          {
            url: &#39;path/to/picture-2.jpg&#39;,
            caption: &#39;Picture 2&#39;
          }
        ]
      }
    },
    methods: {
      openPhotoBrowser: function () {
        this.$refs.pb.open();
      },
      onOpen: function () {
        console.log(&#39;Photo Browser is opened&#39;)
      }
    }
  }
</script>
<code>## 34.0 Popover Vue Component</code>
Examples
<!-- Popover -->
<f7-popover>
  <!-- Popover content goes here -->
</f7-popover>
Renders to:
<!-- Popover -->
<div class="popover">
  <div class="popover-angle"></div>
  <div class="popover-inner">
    <!-- Popover content goes here -->
  </div>
</div>
<code>## 35.0 Popup Vue Component</code>
<!-- Popup -->
<f7-popup>
  <!-- Popup content goes here -->
</f7-popup>

<!-- Popup which is also fullscreen on tablets -->
<f7-popup tablet-fullscreen>
  <!-- Popup content goes here -->
</f7-popup>
Renders to:
<!-- Popup -->
<div class="popup">
  <!-- Popup content goes here -->
</div>

<!-- Popup which is also fullscreen on tablets -->
<p><div class="popup tablet-fullscreen">
  <!-- Popup content goes here -->
</div>

```
## 36.0 Preloader / Spinner Vue Component
```

Examples
<!-- Preloader --></p>
<p><f7-preloader></f7-preloader></p>
<!-- Red preloader -->
<p><f7-preloader color="red"></f7-preloader></p>
<!-- Blue with custom size -->
<p><f7-preloader color="green" size="44px"></f7-preloader>
Renders to:
<!-- Preloader -->
<span class="preloader"></span></p>
<!-- Red preloader -->
<p><span class="preloader color-red"></span></p>
<!-- Blue with custom size -->
<p><span class="preloader color-green" style="width:44px; height:44px"></span>

```
## 37.0 Progressbar Vue Component
```

Examples
<!-- Determinate Progressbar --></p>
<p><f7-progressbar :progress="20"></f7-progressbar></p>
<!-- Determinate Red Progressbar -->
<p><f7-progressbar :progress="30" color="red"></f7-progressbar></p>
<!-- Infinite Blue Progressbar -->
<p><f7-progressbar infinite color="green"></f7-progressbar></p>
<!-- Infinite Multi-color Progressbar -->
<p><f7-progressbar infinite color="multi"></f7-progressbar>
Renders to:
<!-- Determinate Progressbar -->
<span class="progressbar" data-progress="20"><span></span></span></p>
<!-- Determinate Red Progressbar -->
<p><span class="progressbar color-red" data-progress="30"><span></span></span></p>
<!-- Infinite Blue Progressbar -->
<p><span class="progressbar progressbar-infinite color-green"><span></span></span></p>
<!-- Infinite Multi-color Progressbar -->
<p><span class="progressbar progressbar-infinite color-multi"><span></span></span>

```
## 38.0 Radio Vue Component
```

Radios List
Radios List is not a separate component, but just a particular case of using <f7-list>, <f7-list-item>.</p>
<p><f7-list>
  <!-- Additional "radio" prop to enable radio list item -->
  <f7-list-item radio value="check_1" name="demo-radio" checked title="Radio 1"></f7-list-item>
  <f7-list-item radio value="check_2" name="demo-radio" title="Radio 2"></f7-list-item>
</f7-list>
Radio v-model
v-model is not supported on Radio vue component. Instead, just use the combination of checked property and @change event:</p>
<template>
  <f7-radio
    name="fruit"
    value="bannana"
    :checked="fruit === 'bannana'"
    @change="fruit = $event.target.value"
  ></f7-radio>

  <f7-radio
    name="fruit"
    value="orange"
    :checked="fruit === 'orange'"
    @change="fruit = $event.target.value"
  ></f7-radio>

  <f7-radio
    name="fruit"
    value="apple"
    :checked="fruit === 'apple'"
    @change="fruit = $event.target.value"
  ></f7-radio>
</template>
<script>
  export default {
    data() {
      return {
        fruit: &#39;apple&#39;
      };
    },
  };
</script>
Examples
<!-- Inline radio -->
<p>Lorem <f7-radio name="demo-radio-1"></f7-radio> ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae illo nihil aut eius commodi sint eveniet aliquid eligendi <f7-radio name="demo-radio-1" checked></f7-radio> ad delectus impedit tempore nemo, enim vel praesentium consequatur nulla mollitia!</p>

<!-- Radios List -->
<f7-list>
  <f7-list-item radio value="Books" title="Books" name="demo-radio-2" checked></f7-list-item>
  <f7-list-item radio value="Movies" title="Movies" name="demo-radio-2"></f7-list-item>
  <f7-list-item radio value="Food" title="Food" name="demo-radio-2"></f7-list-item>
  <f7-list-item radio value="Drinks" title="Drinks" name="demo-radio-2"></f7-list-item>
</f7-list>
<code>## 39.0 Range Slider Vue Component</code>
<!-- Default -->
<f7-range
  :min="0"
  :max="100"
  :step="1"
  :value="10"
></f7-range>

<!-- Enable labels + color -->
<f7-range
  :min="0"
  :max="100"
  :step="1"
  :value="50"
  :label="true"
  color="orange"
></f7-range>

<!-- Dual -->
<f7-range
  :min="0"
  :max="500"
  :step="1"
  :value="[100, 500]"
  :label="true"
  :dual="true"
  color="green"
></f7-range>
<code>## 40.0 Searchbar Vue Component</code>
Without Slots:
<f7-searchbar
  disable-link-text="Cancel"
  placeholder="Search in items"
  :clear-button="true"
></f7-searchbar>

<!-- Renders to: -->

<form class="searchbar">
  <div class="searchbar-inner">
    <div class="searchbar-input-wrap">
      <input type="search" placeholder="Search">
      <i class="searchbar-icon"></i>
      <span class="input-clear-button"></span>
    </div>
    <span class="searchbar-disable-button">Cancel</span>
  </div>
</form>
With Slots:
<f7-searchbar
  disable-link-text="Cancel"
  placeholder="Search in items"
  :clear-button="true"
>
  <div slot="inner-start">Inner Start</div>
  <div slot="inner-end">Inner End</div>
  <div slot="input-wrap-start">Input Wrap Start</div>
  <div slot="input-wrap-end">Input Wrap End</div>
  <div slot="before-inner">Before Inner</div>
  <div slot="after-inner">After Inner</div>
</f7-searchbar>

<!-- Renders to: -->

<form class="searchbar">
  <div slot="before-inner">Before Inner</div>
  <div class="searchbar-inner">
    <div slot="inner-start">Inner Start</div>
    <div class="searchbar-input-wrap">
      <div slot="input-wrap-start">Input Wrap Start</div>
      <input type="search" placeholder="Search">
      <i class="searchbar-icon"></i>
      <span class="input-clear-button"></span>
      <div slot="input-wrap-end">Input Wrap End</div>
    </div>
    <span class="searchbar-disable-button">Cancel</span>
    <div slot="inner-end">Inner End</div>
  </div>
  <div slot="after-inner">After Inner</div>
</form>
Access To Searchbar Instance
If you use automatic initalization to init Searchbar (with init:true prop) and need to use Searchbar API you can access its initialized instance by accessing .f7Searchbar component&#39;s property.
Examples
Here is how it can be used in Vue component with initialization
<template>
  <f7-page>

    <!-- Searchbar -->
    <f7-searchbar
      disable-link-text="Cancel"
      search-container="#search-list"
      placeholder="Search in items"
      :clear-button="true"
      @searchbar:search="onSearch"
      @searchbar:enable="onEnable"
      @searchbar:disable="onDisable"
      @searchbar:clear="onClear"
    ></f7-searchbar>

    <!-- Will be visible if there is no any results found, defined by "searchbar-not-found" class -->
    <f7-list class="searchbar-not-found">
      <f7-list-item title="Nothing found"></f7-list-item>
    </f7-list>

    <!-- Search through this list -->
    <f7-list class="searchbar-found" id="search-list">
      <f7-list-item v-for="item in items" :title="'Item ' + item"></f7-list-item>
    </f7-list>

  </f7-page>
</template>

<p><script>
  export default {
    data: function () {
      return {
        items: (function () {
          var it = [];
          for (var i = 0; i &lt; 100; i++) it.push(i+1);
          return it;
        })()
      }
    },
    methods: {
      onSearch: function (searchbar, query, previousQuery) {
        console.log(&#39;search&#39;, query);
      },
      onClear: function (event) {
        console.log(&#39;clear&#39;);
      },
      onEnable: function (event) {
        console.log(&#39;enable&#39;);
      },
      onDisable: function (event) {
        console.log(&#39;disable&#39;);
      },
    }
  }
</script>

```
## 41.0 Sheet Modal Vue Component
```

Examples
<!-- Sheet Modal --></p>
<p><f7-sheet>
  <!-- Sheet Modal content goes here -->
</f7-sheet>
Renders to:
<!-- Sheet Modal --></p>
<p><div class="sheet-modal">
  <div class="sheet-modal-inner">
    <!-- Sheet Modal content goes here -->
  </div>
</div>

```
## 42.0 Smart Select Vue Component
```
`
```
## 43.0 Sortable Vue Component
```
`
```
## 44.0 Statusbar Vue Component
```
`
```
## 45.0 Stepper Vue Component
```

<!-- Default --></p>
<p><f7-stepper></f7-stepper></p>
<!-- Small and round -->
<p><f7-stepper small round></f7-stepper></p>
<!-- Min, max, step -->
<p>&lt;f7-stepper
  :min=&quot;0&quot;
  :max=&quot;1000&quot;
  :step=&quot;100&quot;
  :value=&quot;500&quot;</p>
<blockquote>
<p></f7-stepper></p>
</blockquote>
<!-- With buttons only -->
<p>&lt;f7-stepper
  :min=&quot;0&quot;
  :max=&quot;1000&quot;
  :step=&quot;100&quot;
  :value=&quot;500&quot;
  :buttons-only=&quot;true&quot;</p>
<blockquote>
<p></f7-stepper></p>
</blockquote>
<!-- Event -->
<p>&lt;f7-stepper
  :min=&quot;10&quot;
  :max=&quot;20&quot;
  :step=&quot;0.5&quot;
  :value=&quot;15&quot;
  @stepper:change=&quot;(value) =&gt; { someVar = value }&quot;</p>
<blockquote>
<p></f7-stepper>

```
## 46.0 Subnavbar Vue Component
```
`
```
## 47.0 Swiper Vue Component
```
`
```
## 48.0 Swipeout Vue Component
```

Swipe To Delete</p>
<p><f7-list>
  <f7-list-item swipeout title="Item 1" @swipeout:deleted="onSwipeoutDeleted">
    <f7-swipeout-actions>
      <f7-swipeout-button delete>Delete</f7-swipeout-button>
    </f7-swipeout-actions>
  </f7-list-item>
  <f7-list-item swipeout title="Item 2" @swipeout:deleted="onSwipeoutDeleted">
    <f7-swipeout-actions>
      <f7-swipeout-button delete>Delete</f7-swipeout-button>
    </f7-swipeout-actions>
  </f7-list-item>
</f7-list>
Renders to:</p>
<p><div class="list">
  <ul>
    <li class="swipeout">
      <div class="swipeout-content">
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title">Item 1</div>
          </div>
        </div>
      </div>
      <div class="swipeout-actions-right">
        <a href="#" class="swipeout-delete">Delete</a>
      </div>
    </li>
    <li class="swipeout">
      <div class="swipeout-content">
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title">Item 2</div>
          </div>
        </div>
      </div>
      <div class="swipeout-actions-right">
        <a href="#" class="swipeout-delete">Delete</a>
      </div>
    </li>
  </ul>
</div>
With Additional Actions</p>
<p><f7-list>
  <f7-list-item swipeout title="Item 1" @swipeout:deleted="onSwipeoutDeleted">
    <f7-swipeout-actions>
      <f7-swipeout-button close color="blue">Reply</f7-swipeout-button>
      <f7-swipeout-button delete>Delete</f7-swipeout-button>
    </f7-swipeout-actions>
  </f7-list-item>
  <f7-list-item swipeout title="Item 2" @swipeout:deleted="onSwipeoutDeleted">
    <f7-swipeout-actions>
      <f7-swipeout-button close color="blue">Reply</f7-swipeout-button>
      <f7-swipeout-button delete>Delete</f7-swipeout-button>
    </f7-swipeout-actions>
  </f7-list-item>
</f7-list>
Renders to:</p>
<p><div class="list">
  <ul>
    <li class="swipeout">
      <div class="swipeout-content">
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title">Item 1</div>
          </div>
        </div>
      </div>
      <div class="swipeout-actions-right">
        <a href="#" class="swipeout-close color-blue">Reply</a>
        <a href="#" class="swipeout-delete">Delete</a>
      </div>
    </li>
    <li class="swipeout">
      <div class="swipeout-content">
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title">Item 2</div>
          </div>
        </div>
      </div>
      <div class="swipeout-actions-right">
        <a href="#" class="swipeout-close color-blue">Reply</a>
        <a href="#" class="swipeout-delete">Delete</a>
      </div>
    </li>
  </ul>
</div>
With Actions On Left</p>
<p><f7-list>
  <f7-list-item swipeout title="Item 1">
    <f7-swipeout-actions left>
      <f7-swipeout-button close color="orange">Mark</f7-swipeout-button>
    </f7-swipeout-actions>
  </f7-list-item>
  <f7-list-item swipeout title="Item 2">
    <f7-swipeout-actions left>
      <f7-swipeout-button close color="orange">Mark</f7-swipeout-button>
    </f7-swipeout-actions>
  </f7-list-item>
</f7-list>
Renders to:</p>
<p><div class="list">
  <ul>
    <li class="swipeout">
      <div class="swipeout-content">
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title">Item 1</div>
          </div>
        </div>
      </div>
      <div class="swipeout-actions-left">
        <a href="#" class="swipeout-close color-orange">Mark</a>
      </div>
    </li>
    <li class="swipeout">
      <div class="swipeout-content">
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title">Item 2</div>
          </div>
        </div>
      </div>
      <div class="swipeout-actions-right">
        <a href="#" class="swipeout-close color-orange">Mark</a>
      </div>
    </li>
  </ul>
</div>
With Actions On Both Sides</p>
<p><f7-list>
  <f7-list-item swipeout title="Item 1">
    <f7-swipeout-actions left>
      <f7-swipeout-button close color="orange">Mark</f7-swipeout-button>
    </f7-swipeout-actions>
    <f7-swipeout-actions right>
      <f7-swipeout-button delete>Delete</f7-swipeout-button>
    </f7-swipeout-actions>
  </f7-list-item>
  <f7-list-item swipeout title="Item 2">
    <f7-swipeout-actions left>
      <f7-swipeout-button close color="orange">Mark</f7-swipeout-button>
    </f7-swipeout-actions>
    <f7-swipeout-actions right>
      <f7-swipeout-button delete>Delete</f7-swipeout-button>
    </f7-swipeout-actions>
  </f7-list-item>
</f7-list>
Renders to:</p>
<p><div class="list">
  <ul>
    <li class="swipeout">
      <div class="swipeout-content">
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title">Item 1</div>
          </div>
        </div>
      </div>
      <div class="swipeout-actions-left">
        <a href="#" class="swipeout-close color-orange">Mark</a>
      </div>
      <div class="swipeout-actions-right">
        <a href="#" class="swipeout-delete">Delete</a>
      </div>
    </li>
    <li class="swipeout">
      <div class="swipeout-content">
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title">Item 2</div>
          </div>
        </div>
      </div>
      <div class="swipeout-actions-right">
        <a href="#" class="swipeout-close color-orange">Mark</a>
      </div>
      <div class="swipeout-actions-right">
        <a href="#" class="swipeout-delete">Delete</a>
      </div>
    </li>
  </ul>
</div>

```
## 49.0 Tabs Vue Component
```

Examples</p>
<p><f7-tabs>
  <f7-tab id="tab1" tab-active>Tab 1 content...</f7-tab>
  <f7-tab id="tab2">Tab 2 content...</f7-tab>
</f7-tabs></p>
<!-- Renders to: -->
<p><div class="tabs">
  <div id="tab1" class="tab tab-active">Tab 1 content...</div>
  <div id="tab2" class="tab">Tab 2 content...</div>
</div>
Animated tabs</p>
<p><f7-tabs animated>
  <f7-tab id="tab1" tab-active>Tab 1 content...</f7-tab>
  <f7-tab id="tab2">Tab 2 content...</f7-tab>
</f7-tabs></p>
<!-- Renders to: -->
<p><div class="tabs-animated-wrap">
  <div class="tabs">
    <div id="tab1" class="tab tab-active">Tab 1 content...</div>
    <div id="tab2" class="tab">Tab 2 content...</div>
  </div>
</div>
</div>
Swipeable tabs</p>
<p><f7-tabs swipeable>
  <f7-tab id="tab1" tab-active>Tab 1 content...</f7-tab>
  <f7-tab id="tab2">Tab 2 content...</f7-tab>
</f7-tabs></p>
<!-- Renders to: -->
<p><div class="tabs-swipeable-wrap">
  <div class="tabs">
    <div id="tab1" class="tab tab-active">Tab 1 content...</div>
    <div id="tab2" class="tab">Tab 2 content...</div>
  </div>
</div>

```
## 50.0 Toggle Vue Component
```

<!-- Checked --></p>
<p><f7-toggle checked></f7-toggle></p>
<!-- Color toggle -->
<p><f7-toggle color="red"></f7-toggle></p>
<!-- Disabled -->
<p><f7-toggle color="orange" disabled></f7-toggle>

```
## 51.0 Toolbar Vue Component
```
`
```
## 52.0 View Vue Component
```
`
```
## 53.0 Virtual List Vue Component
```
`
```
## 54.0 actions:
```
var app = new Framework7({
  actions: {
    convertToPopover: false,
    grid: true,
  }
});
```
## 55.0 autocomplete
```
var autocomplete = app.autocomplete.create({
  inputEl: &#39;#autocomplete-dropdown&#39;,
  openIn: &#39;dropdown&#39;,
  source: function (query, render) {
    ...
  }
});
```
## 56.0 Dom7
```
//Export DOM7 to local variable to make it easy accessable
var $$ = Dom7;
$$(&#39;.something&#39;).on(&#39;click&#39;, function (e) {
    $$(this).addClass(&#39;hello&#39;).attr(&#39;title&#39;, &#39;world&#39;).insertAfter(&#39;.something-else&#39;);
});
```
## 57.0 template7
```

// Initialize app
var app = new Framework7();</p>
<p>var $$ = Dom7;</p>
<p>// Compile templates once on app load/init
var searchTemplate = $$(&#39;script#search-template&#39;).html();
var compiledSearchTemplate = Template7.compile(searchTemplate);</p>
<p>var listTemplate = $$(&#39;script#list-template&#39;).html();
var compiledListTemplate = Template7.compile(listTemplate);</p>
<p>// That is all, now and further just execute compiled templates with required context
app.on(&#39;pageInit&#39;, function (page) {
    // Just execute compiled search template with required content:
    var html = compiledSearchTemplate({/<em>...some data...</em>/});</p>
// Do something with html...
<p>});

```
## 58.0 plugin
```

var myPlugin = {
  // Module Name
  name: &#39;demo-module&#39;,
  /<em> Install callback
  It will be executed right after component is installed
  Context of this callback points to Class where it was installed
  </em>/
  install() {
    const Class = this;
    console.log(Class);
  },
  /<em> Create callback
  It will be executed in the very beginning of class initilization (when we create new instance of the class)
  </em>/
  create(instance) {
    console.log(&#39;init&#39;, instance);
  },
  /<em>
  Object with default class/plugin parameters
  </em>/
  params: {
    myPlugin: {
      a: 1,
      b: 2,
      c: 3,
    }
  },
  /<em> proto object extends Class prototype </em>/
  proto: {
    demo() {
      return &#39;demo-module-proto-method&#39;;
    },
    demoStatic: &#39;demo-module-proto-static&#39;,
  },
  // Extend Class with static props and methods, e.g. Class.myMethod
  static: {
    demo() {
      return &#39;demo-module-class-method&#39;;
    },
    demoStatic: &#39;demo-module-class-static&#39;,
  },
  /<em> Initialized instance Props &amp; Methods </em>/
  instance: {
    demoProp: true,
    demoMethod() {
      return &#39;demo-method&#39;;
    },
  },
  /<em> Event handlers </em>/
  on: {
    demoEvent(a, b) {
      console.log(&#39;demo-event&#39;, a, b);
    },
  },
  /<em> Handle clicks </em>/
  clicks: {
    // prop name means CSS selector of element to add click handler
    &#39;p&#39;: function ($clickedEl, data) {
      // $clickedEl: Dom7 instance of clicked element
      // data: element data set (data- attributes)
    },
  }
};</p>
<p>Framework7.use(myPlugin);

```
## 59.9 御修了ありがとうございました。
* certificatePath: https://firebasestorage.googleapis.com/v0/b/wohapp-3a179.appspot.com/o/knowledgecontents%2FiHmcxnnRDWPOJAE38On1nCdq0ir2%2F-LdLtaiBADqiIat-6k_3x36?alt=media&token=fea48fd5-2624-4538-abce-5958da467618
