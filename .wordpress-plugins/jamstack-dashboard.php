<?php
/**
 * Plugin Name: Jamstack Dashboard
 * Version: 0.0.1
 */

/**
 * ? For more information on WPGraphQL resolvers
 * ? See https://www.wpgraphql.com/docs/graphql-resolvers/
 */

// isActive on Plugin
add_action( 'graphql_register_types', function() {
  register_graphql_field( 'Plugin', 'isActive', [
    'type' => 'Boolean',
    'resolve' => function($source) {
        return is_plugin_active($source->path);
    }
  ]);
} );


// archiveContentType on ContentNode
// ie: Blog page archiveContentType = "post"
add_action( 'graphql_register_types', function() {
  register_graphql_field( 'ContentNode', 'archiveContentType', [
    'type' => 'String',
    'resolve' => function($source) {
        $archive_content_type = null;
        $post_permalink = get_permalink($source->databaseId);
        $post_types = get_post_types();

        foreach ($post_types as $post_type) {
          $post_type_archive_link = get_post_type_archive_link($post_type);

          if ($post_permalink == $post_type_archive_link) {
            $archive_content_type = $post_type;
          }
        }

        return $archive_content_type;
    }
  ]);
} );

// isArchive on ContentNode
add_action( 'graphql_register_types', function() {
  register_graphql_field( 'ContentNode', 'isArchive', [
    'type' => 'Boolean',
    'resolve' => function($source) {
        $is_archive = false;
        $post_permalink = get_permalink($source->databaseId);
        $post_types = get_post_types();
        
        foreach ($post_types as $post_type) {
          $post_type_archive_link = get_post_type_archive_link($post_type);

          if ($post_permalink == $post_type_archive_link) {
            $is_archive = true;
          }
        }

        return $is_archive;
    }
  ]);
} );