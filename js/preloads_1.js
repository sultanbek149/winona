
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.5924d6cbccd547e6df81.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/902.latest.en.53c6d2a6ebbd59feedca.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/974.latest.en.98e9dbab89ff3cc654d6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/991.latest.en.d3b9e1c836079c47c5af.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.362905b26f0fac0b2b57.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/845.latest.en.6db36d65de55b15facf0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/462.latest.en.f519abfc5989f2727592.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/18.latest.en.7c3c36c85cb0f2c88186.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.ad64a27e54c6839b20f3.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/902.latest.en.e3249b8edfbd78330bac.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.55f216aff0015c72787f.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.en.b1a85f925b41702ad78f.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  