---
layout: post
title:  "Wordpress Endpoint"
date:   2016-04-27 14:52:24 +0900
categories: wordpress
---

# Wordpress EndPoint use

{% highlight php %}
	class EndPoint_API {
		public function __construct() {
			add_filter('query_vars', array($this, 'add_query_vars'), 0);
			add_action('parse_request', array($this, 'sniff_requests'), 0);
			add_action('init', array($this, 'add_endpoint'), 0);
			add_action('wp_loaded', array($this, 'flush_rules'));
		}
		
		public function add_endpoint() {
			add_rewrite_rule(
				'^v1/([^/]+)/?',
				'index.php?__api=test&_div=test',
				'top'
			);
		}
		
		public function flush_rules() {
			$rules = get_option( 'rewrite_rules' );
			if ( ! isset( $rules['^v1/test/?']) ) {
				global $wp_rewrite;
				$wp_rewrite->flush_rules();
			}
		}
		
		public function add_query_vars( $vars ) {
			$vars[] = '__api';
			$vars[] = '__action';
			$vars[] = '__service';
			return $vars;
		}
		
		public function sniff_requests() {
			global $wp;
			if(isset($wp -> query_vars['__api'])){
				$this -> handle_request();
				exit;
			}
		}
		
		protected function handle_request() {
			global $wp;
			//...
		}
	}
	
	new EndPoint_API();
{% endhighlight %}