;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		var funcs	=		'abs acos acosh addcslashes addslashes aggregate aggregate_info aggregate_methods ' +
							'aggregate_methods_by_list aggregate_methods_by_regexp aggregate_properties ' +
							'aggregate_properties_by_list aggregate_properties_by_regexp aggregation_info amqpchannel ' +
							'amqpconnection amqpenvelope amqpexchange amqpqueue apache_child_terminate apache_get_modules ' +
							'apache_get_version apache_getenv apache_lookup_uri apache_note apache_request_headers ' +
							'apache_reset_timeout apache_response_headers apache_setenv apc_add apc_bin_dump ' +
							'apc_bin_dumpfile apc_bin_load apc_bin_loadfile apc_cache_info apc_cas apc_clear_cache ' +
							'apc_compile_file apc_dec apc_define_constants apc_delete apc_delete_file apc_exists ' +
							'apc_fetch apc_inc apc_load_constants apc_sma_info apc_store apciterator apd_breakpoint ' +
							'apd_callstack apd_clunk apd_continue apd_croak apd_dump_function_table ' +
							'apd_dump_persistent_resources apd_dump_regular_resources apd_echo apd_get_active_symbols ' +
							'apd_set_pprof_trace apd_set_session apd_set_session_trace apd_set_session_trace_socket ' +
							'appenditerator array array_change_key_case array_chunk array_combine array_count_values ' +
							'array_diff array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill ' +
							'array_fill_keys array_filter array_flip array_intersect array_intersect_assoc ' +
							'array_intersect_key array_intersect_uassoc array_intersect_ukey array_key_exists array_keys ' +
							'array_map array_merge array_merge_recursive array_multisort array_pad array_pop ' +
							'array_product array_push array_rand array_reduce array_replace array_replace_recursive ' +
							'array_reverse array_search array_shift array_slice array_splice array_sum array_udiff ' +
							'array_udiff_assoc array_udiff_uassoc array_uintersect array_uintersect_assoc ' +
							'array_uintersect_uassoc array_unique array_unshift array_values array_walk ' +
							'array_walk_recursive arrayaccess arrayiterator arrayobject arsort asin asinh asort assert ' +
							'assert_options atan atan2 atanh autoload badfunctioncallexception badmethodcallexception ' +
							'base64_decode base64_encode base_convert basename bbcode_add_element bbcode_add_smiley ' +
							'bbcode_create bbcode_destroy bbcode_parse bbcode_set_arg_parser bbcode_set_flags bcadd ' +
							'bccomp bcdiv bcmod bcmul bcompiler_load bcompiler_load_exe bcompiler_parse_class ' +
							'bcompiler_read bcompiler_write_class bcompiler_write_constant bcompiler_write_exe_footer ' +
							'bcompiler_write_file bcompiler_write_footer bcompiler_write_function ' +
							'bcompiler_write_functions_from_file bcompiler_write_header bcompiler_write_included_filename ' +
							'bcpow bcpowmod bcscale bcsqrt bcsub bin2hex bind_textdomain_codeset bindec bindtextdomain ' +
							'bson_decode bson_encode bzclose bzcompress bzdecompress bzerrno bzerror bzerrstr bzflush ' +
							'bzopen bzread bzwrite cachingiterator cairo cairo_create cairo_font_face_get_type ' +
							'cairo_font_face_status cairo_font_options_create cairo_font_options_equal ' +
							'cairo_font_options_get_antialias cairo_font_options_get_hint_metrics ' +
							'cairo_font_options_get_hint_style cairo_font_options_get_subpixel_order cairo_font_options_hash ' +
							'cairo_font_options_merge cairo_font_options_set_antialias cairo_font_options_set_hint_metrics ' +
							'cairo_font_options_set_hint_style cairo_font_options_set_subpixel_order ' +
							'cairo_font_options_status cairo_format_stride_for_width cairo_image_surface_create ' +
							'cairo_image_surface_create_for_data cairo_image_surface_create_from_png ' +
							'cairo_image_surface_get_data cairo_image_surface_get_format cairo_image_surface_get_height ' +
							'cairo_image_surface_get_stride cairo_image_surface_get_width cairo_matrix_create_scale ' +
							'cairo_matrix_create_translate cairo_matrix_invert cairo_matrix_multiply cairo_matrix_rotate ' +
							'cairo_matrix_transform_distance cairo_matrix_transform_point cairo_matrix_translate ' +
							'cairo_pattern_add_color_stop_rgb cairo_pattern_add_color_stop_rgba ' +
							'cairo_pattern_create_for_surface cairo_pattern_create_linear cairo_pattern_create_radial ' +
							'cairo_pattern_create_rgb cairo_pattern_create_rgba cairo_pattern_get_color_stop_count ' +
							'cairo_pattern_get_color_stop_rgba cairo_pattern_get_extend cairo_pattern_get_filter ' +
							'cairo_pattern_get_linear_points cairo_pattern_get_matrix cairo_pattern_get_radial_circles ' +
							'cairo_pattern_get_rgba cairo_pattern_get_surface cairo_pattern_get_type ' +
							'cairo_pattern_set_extend cairo_pattern_set_filter cairo_pattern_set_matrix cairo_pattern_status ' +
							'cairo_pdf_surface_create cairo_pdf_surface_set_size cairo_ps_get_levels ' +
							'cairo_ps_level_to_string cairo_ps_surface_create cairo_ps_surface_dsc_begin_page_setup ' +
							'cairo_ps_surface_dsc_begin_setup cairo_ps_surface_dsc_comment cairo_ps_surface_get_eps ' +
							'cairo_ps_surface_restrict_to_level cairo_ps_surface_set_eps cairo_ps_surface_set_size ' +
							'cairo_scaled_font_create cairo_scaled_font_extents cairo_scaled_font_get_ctm ' +
							'cairo_scaled_font_get_font_face cairo_scaled_font_get_font_matrix ' +
							'cairo_scaled_font_get_font_options cairo_scaled_font_get_scale_matrix cairo_scaled_font_get_type ' +
							'cairo_scaled_font_glyph_extents cairo_scaled_font_status cairo_scaled_font_text_extents ' +
							'cairo_surface_copy_page cairo_surface_create_similar cairo_surface_finish cairo_surface_flush ' +
							'cairo_surface_get_content cairo_surface_get_device_offset cairo_surface_get_font_options ' +
							'cairo_surface_get_type cairo_surface_mark_dirty cairo_surface_mark_dirty_rectangle ' +
							'cairo_surface_set_device_offset cairo_surface_set_fallback_resolution cairo_surface_show_page ' +
							'cairo_surface_status cairo_surface_write_to_png cairo_svg_surface_create ' +
							'cairo_svg_surface_restrict_to_version cairo_svg_version_to_string cairoantialias cairocontent ' +
							'cairocontext cairoexception cairoextend cairofillrule cairofilter cairofontface ' +
							'cairofontoptions cairofontslant cairofonttype cairofontweight cairoformat ' +
							'cairogradientpattern cairohintmetrics cairohintstyle cairoimagesurface cairolineargradient ' +
							'cairolinecap cairolinejoin cairomatrix cairooperator cairopath cairopattern cairopatterntype ' +
							'cairopdfsurface cairopslevel cairopssurface cairoradialgradient cairoscaledfont ' +
							'cairosolidpattern cairostatus cairosubpixelorder cairosurface cairosurfacepattern ' +
							'cairosurfacetype cairosvgsurface cairosvgversion cairotoyfontface cal_days_in_month ' +
							'cal_from_jd cal_info cal_to_jd calcul_hmac calculhmac call_user_func call_user_func_array ' +
							'call_user_method call_user_method_array callbackfilteriterator ceil chdb chdb_create chdir ' +
							'checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_alias ' +
							'class_exists class_implements class_parents class_uses classkit_import classkit_method_add ' +
							'classkit_method_copy classkit_method_redefine classkit_method_remove classkit_method_rename ' +
							'clearstatcache closedir closelog closure collator com com_addref com_create_guid ' +
							'com_event_sink com_get com_get_active_object com_invoke com_isenum com_load com_load_typelib ' +
							'com_message_pump com_print_typeinfo com_propget com_propput com_propset com_release com_set ' +
							'compact cond connection_aborted connection_status connection_timeout constant ' +
							'convert_cyr_string convert_uudecode convert_uuencode copy cos cosh count count_chars ' +
							'countable crack_check crack_closedict crack_getlastmessage crack_opendict crc32 ' +
							'create_function crypt ctype_alnum ctype_alpha ctype_cntrl ctype_digit ctype_graph ' +
							'ctype_lower ctype_print ctype_punct ctype_space ctype_upper ctype_xdigit ' +
							'cubrid_affected_rows cubrid_bind cubrid_client_encoding cubrid_close cubrid_close_prepare ' +
							'cubrid_close_request cubrid_col_get cubrid_col_size cubrid_column_names cubrid_column_types ' +
							'cubrid_commit cubrid_connect cubrid_connect_with_url cubrid_current_oid cubrid_data_seek ' +
							'cubrid_db_name cubrid_disconnect cubrid_drop cubrid_errno cubrid_error cubrid_error_code ' +
							'cubrid_error_code_facility cubrid_error_msg cubrid_execute cubrid_fetch cubrid_fetch_array ' +
							'cubrid_fetch_assoc cubrid_fetch_field cubrid_fetch_lengths cubrid_fetch_object ' +
							'cubrid_fetch_row cubrid_field_flags cubrid_field_len cubrid_field_name cubrid_field_seek ' +
							'cubrid_field_table cubrid_field_type cubrid_free_result cubrid_get cubrid_get_autocommit ' +
							'cubrid_get_charset cubrid_get_class_name cubrid_get_client_info cubrid_get_db_parameter ' +
							'cubrid_get_query_timeout cubrid_get_server_info cubrid_insert_id cubrid_is_instance ' +
							'cubrid_list_dbs cubrid_load_from_glo cubrid_lob2_bind cubrid_lob2_close cubrid_lob2_export ' +
							'cubrid_lob2_import cubrid_lob2_new cubrid_lob2_read cubrid_lob2_seek cubrid_lob2_seek64 ' +
							'cubrid_lob2_size cubrid_lob2_size64 cubrid_lob2_tell cubrid_lob2_tell64 cubrid_lob2_write ' +
							'cubrid_lob_close cubrid_lob_export cubrid_lob_get cubrid_lob_send cubrid_lob_size ' +
							'cubrid_lock_read cubrid_lock_write cubrid_move_cursor cubrid_new_glo cubrid_next_result ' +
							'cubrid_num_cols cubrid_num_fields cubrid_num_rows cubrid_pconnect cubrid_pconnect_with_url ' +
							'cubrid_ping cubrid_prepare cubrid_put cubrid_query cubrid_real_escape_string cubrid_result ' +
							'cubrid_rollback cubrid_save_to_glo cubrid_schema cubrid_send_glo cubrid_seq_drop ' +
							'cubrid_seq_insert cubrid_seq_put cubrid_set_add cubrid_set_autocommit cubrid_set_db_parameter ' +
							'cubrid_set_drop cubrid_set_query_timeout cubrid_unbuffered_query cubrid_version curl_close ' +
							'curl_copy_handle curl_errno curl_error curl_exec curl_getinfo curl_init ' +
							'curl_multi_add_handle curl_multi_close curl_multi_exec curl_multi_getcontent ' +
							'curl_multi_info_read curl_multi_init curl_multi_remove_handle curl_multi_select curl_setopt ' +
							'curl_setopt_array curl_version current cyrus_authenticate cyrus_bind cyrus_close ' +
							'cyrus_connect cyrus_query cyrus_unbind date date_add date_create date_create_from_format ' +
							'date_date_set date_default_timezone_get date_default_timezone_set date_diff date_format ' +
							'date_get_last_errors date_interval_create_from_date_string date_interval_format ' +
							'date_isodate_set date_modify date_offset_get date_parse date_parse_from_format date_sub ' +
							'date_sun_info date_sunrise date_sunset date_time_set date_timestamp_get date_timestamp_set ' +
							'date_timezone_get date_timezone_set dateinterval dateperiod datetime datetimezone ' +
							'db2_autocommit db2_bind_param db2_client_info db2_close db2_column_privileges db2_columns ' +
							'db2_commit db2_conn_error db2_conn_errormsg db2_connect db2_cursor_type db2_escape_string ' +
							'db2_exec db2_execute db2_fetch_array db2_fetch_assoc db2_fetch_both db2_fetch_object ' +
							'db2_fetch_row db2_field_display_size db2_field_name db2_field_num db2_field_precision ' +
							'db2_field_scale db2_field_type db2_field_width db2_foreign_keys db2_free_result db2_free_stmt ' +
							'db2_get_option db2_last_insert_id db2_lob_read db2_next_result db2_num_fields db2_num_rows ' +
							'db2_pclose db2_pconnect db2_prepare db2_primary_keys db2_procedure_columns db2_procedures ' +
							'db2_result db2_rollback db2_server_info db2_set_option db2_special_columns db2_statistics ' +
							'db2_stmt_error db2_stmt_errormsg db2_table_privileges db2_tables dba_close dba_delete ' +
							'dba_exists dba_fetch dba_firstkey dba_handlers dba_insert dba_key_split dba_list ' +
							'dba_nextkey dba_open dba_optimize dba_popen dba_replace dba_sync dbase_add_record ' +
							'dbase_close dbase_create dbase_delete_record dbase_get_header_info dbase_get_record ' +
							'dbase_get_record_with_names dbase_numfields dbase_numrecords dbase_open dbase_pack ' +
							'dbase_replace_record dbplus_add dbplus_aql dbplus_chdir dbplus_close dbplus_curr ' +
							'dbplus_errcode dbplus_errno dbplus_find dbplus_first dbplus_flush dbplus_freealllocks ' +
							'dbplus_freelock dbplus_freerlocks dbplus_getlock dbplus_getunique dbplus_info dbplus_last ' +
							'dbplus_lockrel dbplus_next dbplus_open dbplus_prev dbplus_rchperm dbplus_rcreate ' +
							'dbplus_rcrtexact dbplus_rcrtlike dbplus_resolve dbplus_restorepos dbplus_rkeys dbplus_ropen ' +
							'dbplus_rquery dbplus_rrename dbplus_rsecindex dbplus_runlink dbplus_rzap dbplus_savepos ' +
							'dbplus_setindex dbplus_setindexbynumber dbplus_sql dbplus_tcl dbplus_tremove dbplus_undo ' +
							'dbplus_undoprepare dbplus_unlockrel dbplus_unselect dbplus_update dbplus_xlockrel ' +
							'dbplus_xunlockrel dbx_close dbx_compare dbx_connect dbx_error dbx_escape_string ' +
							'dbx_fetch_row dbx_query dbx_sort dcgettext dcngettext deaggregate debug_backtrace ' +
							'debug_print_backtrace debug_zval_dump decbin dechex decoct define define_syslog_variables ' +
							'defined deg2rad delete dgettext die dio_close dio_fcntl dio_open dio_read dio_seek ' +
							'dio_stat dio_tcsetattr dio_truncate dio_write dir directory directoryiterator dirname ' +
							'disk_free_space disk_total_space diskfreespace dl dngettext dns_check_record dns_get_mx ' +
							'dns_get_record dom_import_simplexml domainexception domattr domcdatasection domcharacterdata ' +
							'domcomment domdocument domdocumentfragment domdocumenttype domelement domentity ' +
							'domentityreference domexception domimplementation domnamednodemap domnode domnodelist ' +
							'domnotation domprocessinginstruction domtext domxpath dotnet dotnet_load doubleval each ' +
							'easter_date easter_days echo eio_busy eio_cancel eio_chmod eio_chown eio_close eio_custom ' +
							'eio_dup2 eio_event_loop eio_fallocate eio_fchmod eio_fchown eio_fdatasync eio_fstat ' +
							'eio_fstatvfs eio_fsync eio_ftruncate eio_futime eio_get_event_stream eio_get_last_error ' +
							'eio_grp eio_grp_add eio_grp_cancel eio_grp_limit eio_init eio_link eio_lstat eio_mkdir ' +
							'eio_mknod eio_nop eio_npending eio_nready eio_nreqs eio_nthreads eio_open eio_poll ' +
							'eio_read eio_readahead eio_readdir eio_readlink eio_realpath eio_rename eio_rmdir eio_seek ' +
							'eio_sendfile eio_set_max_idle eio_set_max_parallel eio_set_max_poll_reqs eio_set_max_poll_time ' +
							'eio_set_min_parallel eio_stat eio_statvfs eio_symlink eio_sync eio_sync_file_range ' +
							'eio_syncfs eio_truncate eio_unlink eio_utime eio_write empty emptyiterator ' +
							'enchant_broker_describe enchant_broker_dict_exists enchant_broker_free enchant_broker_free_dict ' +
							'enchant_broker_get_error enchant_broker_init enchant_broker_list_dicts ' +
							'enchant_broker_request_dict enchant_broker_request_pwl_dict enchant_broker_set_ordering ' +
							'enchant_dict_add_to_personal enchant_dict_add_to_session enchant_dict_check ' +
							'enchant_dict_describe enchant_dict_get_error enchant_dict_is_in_session ' +
							'enchant_dict_quick_check enchant_dict_store_replacement enchant_dict_suggest end ereg ' +
							'ereg_replace eregi eregi_replace error_get_last error_log error_reporting errorexception ' +
							'escapeshellarg escapeshellcmd eval event_add event_base_free event_base_loop ' +
							'event_base_loopbreak event_base_loopexit event_base_new event_base_priority_init ' +
							'event_base_set event_buffer_base_set event_buffer_disable event_buffer_enable ' +
							'event_buffer_fd_set event_buffer_free event_buffer_new event_buffer_priority_set ' +
							'event_buffer_read event_buffer_set_callback event_buffer_timeout_set event_buffer_watermark_set ' +
							'event_buffer_write event_del event_free event_new event_set exception exec exif_imagetype ' +
							'exif_read_data exif_tagname exif_thumbnail exit exp expect_expectl expect_popen explode ' +
							'expm1 extension_loaded extract ezmlm_hash fam_cancel_monitor fam_close ' +
							'fam_monitor_collection fam_monitor_directory fam_monitor_file fam_next_event fam_open ' +
							'fam_pending fam_resume_monitor fam_suspend_monitor fbsql_affected_rows fbsql_autocommit ' +
							'fbsql_blob_size fbsql_change_user fbsql_clob_size fbsql_close fbsql_commit fbsql_connect ' +
							'fbsql_create_blob fbsql_create_clob fbsql_create_db fbsql_data_seek fbsql_database ' +
							'fbsql_database_password fbsql_db_query fbsql_db_status fbsql_drop_db fbsql_errno fbsql_error ' +
							'fbsql_fetch_array fbsql_fetch_assoc fbsql_fetch_field fbsql_fetch_lengths fbsql_fetch_object ' +
							'fbsql_fetch_row fbsql_field_flags fbsql_field_len fbsql_field_name fbsql_field_seek ' +
							'fbsql_field_table fbsql_field_type fbsql_free_result fbsql_get_autostart_info fbsql_hostname ' +
							'fbsql_insert_id fbsql_list_dbs fbsql_list_fields fbsql_list_tables fbsql_next_result ' +
							'fbsql_num_fields fbsql_num_rows fbsql_password fbsql_pconnect fbsql_query fbsql_read_blob ' +
							'fbsql_read_clob fbsql_result fbsql_rollback fbsql_rows_fetched fbsql_select_db ' +
							'fbsql_set_characterset fbsql_set_lob_mode fbsql_set_password fbsql_set_transaction ' +
							'fbsql_start_db fbsql_stop_db fbsql_table_name fbsql_tablename fbsql_username fbsql_warnings ' +
							'fclose fdf_add_doc_javascript fdf_add_template fdf_close fdf_create fdf_enum_values ' +
							'fdf_errno fdf_error fdf_get_ap fdf_get_attachment fdf_get_encoding fdf_get_file ' +
							'fdf_get_flags fdf_get_opt fdf_get_status fdf_get_value fdf_get_version fdf_header ' +
							'fdf_next_field_name fdf_open fdf_open_string fdf_remove_item fdf_save fdf_save_string ' +
							'fdf_set_ap fdf_set_encoding fdf_set_file fdf_set_flags fdf_set_javascript_action ' +
							'fdf_set_on_import_javascript fdf_set_opt fdf_set_status fdf_set_submit_form_action ' +
							'fdf_set_target_frame fdf_set_value fdf_set_version feof fflush fgetc fgetcsv fgets fgetss ' +
							'file file_exists file_get_contents file_put_contents fileatime filectime filegroup ' +
							'fileinode filemtime fileowner fileperms filepro filepro_fieldcount filepro_fieldname ' +
							'filepro_fieldtype filepro_fieldwidth filepro_retrieve filepro_rowcount filesize ' +
							'filesystemiterator filetype filter_has_var filter_id filter_input filter_input_array ' +
							'filter_list filter_var filter_var_array filteriterator finfo_buffer finfo_close finfo_file ' +
							'finfo_open finfo_set_flags floatval flock floor flush fmod fnmatch fopen ' +
							'forward_static_call forward_static_call_array fpassthru fprintf fputcsv fputs fread ' +
							'frenchtojd fribidi_log2vis fscanf fseek fsockopen fstat ftell ftok ftp_alloc ftp_cdup ' +
							'ftp_chdir ftp_chmod ftp_close ftp_connect ftp_delete ftp_exec ftp_fget ftp_fput ftp_get ' +
							'ftp_get_option ftp_login ftp_mdtm ftp_mkdir ftp_nb_continue ftp_nb_fget ftp_nb_fput ' +
							'ftp_nb_get ftp_nb_put ftp_nlist ftp_pasv ftp_put ftp_pwd ftp_quit ftp_raw ftp_rawlist ' +
							'ftp_rename ftp_rmdir ftp_set_option ftp_site ftp_size ftp_ssl_connect ftp_systype ftruncate ' +
							'func_get_arg func_get_args func_name func_num_args function_exists fwrite gc_collect_cycles ' +
							'gc_disable gc_enable gc_enabled gd_info gearmanclient gearmanexception gearmanjob ' +
							'gearmantask gearmanworker gender geoip_continent_code_by_name geoip_country_code3_by_name ' +
							'geoip_country_code_by_name geoip_country_name_by_name geoip_database_info geoip_db_avail ' +
							'geoip_db_filename geoip_db_get_all_info geoip_id_by_name geoip_isp_by_name geoip_org_by_name ' +
							'geoip_record_by_name geoip_region_by_name geoip_region_name_by_code ' +
							'geoip_time_zone_by_country_and_region get_browser get_called_class get_cfg_var get_class ' +
							'get_class_methods get_class_vars get_current_user get_declared_classes get_declared_interfaces ' +
							'get_declared_traits get_defined_constants get_defined_functions get_defined_vars ' +
							'get_extension_funcs get_headers get_html_translation_table get_include_path get_included_files ' +
							'get_loaded_extensions get_magic_quotes_gpc get_magic_quotes_runtime get_meta_tags ' +
							'get_object_vars get_parent_class get_required_files get_resource_type getallheaders getcwd ' +
							'getdate getenv gethostbyaddr gethostbyname gethostbynamel gethostname getimagesize ' +
							'getimagesizefromstring getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt ' +
							'getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext ' +
							'gettimeofday gettype glob globiterator gmagick gmagickdraw gmagickpixel gmdate gmmktime ' +
							'gmp_abs gmp_add gmp_and gmp_clrbit gmp_cmp gmp_com gmp_div gmp_div_q gmp_div_qr gmp_div_r ' +
							'gmp_divexact gmp_fact gmp_gcd gmp_gcdext gmp_hamdist gmp_init gmp_intval gmp_invert ' +
							'gmp_jacobi gmp_legendre gmp_mod gmp_mul gmp_neg gmp_nextprime gmp_or gmp_perfect_square ' +
							'gmp_popcount gmp_pow gmp_powm gmp_prob_prime gmp_random gmp_scan0 gmp_scan1 gmp_setbit ' +
							'gmp_sign gmp_sqrt gmp_sqrtrem gmp_strval gmp_sub gmp_testbit gmp_xor gmstrftime ' +
							'gnupg_adddecryptkey gnupg_addencryptkey gnupg_addsignkey gnupg_cleardecryptkeys ' +
							'gnupg_clearencryptkeys gnupg_clearsignkeys gnupg_decrypt gnupg_decryptverify gnupg_encrypt ' +
							'gnupg_encryptsign gnupg_export gnupg_geterror gnupg_getprotocol gnupg_import gnupg_init ' +
							'gnupg_keyinfo gnupg_setarmor gnupg_seterrormode gnupg_setsignmode gnupg_sign gnupg_verify ' +
							'gopher_parsedir grapheme_extract grapheme_stripos grapheme_stristr grapheme_strlen ' +
							'grapheme_strpos grapheme_strripos grapheme_strrpos grapheme_strstr grapheme_substr ' +
							'gregoriantojd gupnp_context_get_host_ip gupnp_context_get_port ' +
							'gupnp_context_get_subscription_timeout gupnp_context_host_path gupnp_context_new ' +
							'gupnp_context_set_subscription_timeout gupnp_context_timeout_add gupnp_context_unhost_path ' +
							'gupnp_control_point_browse_start gupnp_control_point_browse_stop ' +
							'gupnp_control_point_callback_set gupnp_control_point_new gupnp_device_action_callback_set ' +
							'gupnp_device_info_get gupnp_device_info_get_service gupnp_root_device_get_available ' +
							'gupnp_root_device_get_relative_location gupnp_root_device_new gupnp_root_device_set_available ' +
							'gupnp_root_device_start gupnp_root_device_stop gupnp_service_action_get ' +
							'gupnp_service_action_return gupnp_service_action_return_error gupnp_service_action_set ' +
							'gupnp_service_freeze_notify gupnp_service_info_get gupnp_service_info_get_introspection ' +
							'gupnp_service_introspection_get_state_variable gupnp_service_notify ' +
							'gupnp_service_proxy_action_get gupnp_service_proxy_action_set gupnp_service_proxy_add_notify ' +
							'gupnp_service_proxy_callback_set gupnp_service_proxy_get_subscribed ' +
							'gupnp_service_proxy_remove_notify gupnp_service_proxy_set_subscribed gupnp_service_thaw_notify ' +
							'gzclose gzcompress gzdecode gzdeflate gzencode gzeof gzfile gzgetc gzgets gzgetss ' +
							'gzinflate gzopen gzpassthru gzputs gzread gzrewind gzseek gztell gzuncompress gzwrite ' +
							'halt_compiler haruannotation harudestination harudoc haruencoder haruexception harufont ' +
							'haruimage haruoutline harupage hash hash_algos hash_copy hash_file hash_final hash_hmac ' +
							'hash_hmac_file hash_init hash_pbkdf2 hash_update hash_update_file hash_update_stream header ' +
							'header_register_callback header_remove headers_list headers_sent hebrev hebrevc hex2bin ' +
							'hexdec highlight_file highlight_string html_entity_decode htmlentities htmlspecialchars ' +
							'htmlspecialchars_decode http_build_cookie http_build_query http_build_str http_build_url ' +
							'http_cache_etag http_cache_last_modified http_chunked_decode http_date http_deflate http_get ' +
							'http_get_request_body http_get_request_body_stream http_get_request_headers http_head ' +
							'http_inflate http_match_etag http_match_modified http_match_request_header ' +
							'http_negotiate_charset http_negotiate_content_type http_negotiate_language http_parse_cookie ' +
							'http_parse_headers http_parse_message http_parse_params http_persistent_handles_clean ' +
							'http_persistent_handles_count http_persistent_handles_ident http_post_data http_post_fields ' +
							'http_put_data http_put_file http_put_stream http_redirect http_request ' +
							'http_request_body_encode http_request_method_exists http_request_method_name ' +
							'http_request_method_register http_request_method_unregister http_response_code ' +
							'http_send_content_disposition http_send_content_type http_send_data http_send_file ' +
							'http_send_last_modified http_send_status http_send_stream http_support http_throttle ' +
							'httpdeflatestream httpinflatestream httpmessage httpquerystring httprequest httprequestpool ' +
							'httpresponse hw_array2objrec hw_changeobject hw_children hw_childrenobj hw_close hw_connect ' +
							'hw_connection_info hw_cp hw_deleteobject hw_docbyanchor hw_docbyanchorobj ' +
							'hw_document_attributes hw_document_bodytag hw_document_content hw_document_setcontent ' +
							'hw_document_size hw_dummy hw_edittext hw_error hw_errormsg hw_free_document hw_getanchors ' +
							'hw_getanchorsobj hw_getandlock hw_getchildcoll hw_getchildcollobj hw_getchilddoccoll ' +
							'hw_getchilddoccollobj hw_getobject hw_getobjectbyquery hw_getobjectbyquerycoll ' +
							'hw_getobjectbyquerycollobj hw_getobjectbyqueryobj hw_getparents hw_getparentsobj hw_getrellink ' +
							'hw_getremote hw_getremotechildren hw_getsrcbydestobj hw_gettext hw_getusername hw_identify ' +
							'hw_incollections hw_info hw_inscoll hw_insdoc hw_insertanchors hw_insertdocument ' +
							'hw_insertobject hw_mapid hw_modifyobject hw_mv hw_new_document hw_objrec2array ' +
							'hw_output_document hw_pconnect hw_pipedocument hw_root hw_setlinkroot hw_stat hw_unlock ' +
							'hw_who hwapi_attribute_new hwapi_content_new hwapi_hgcsp hwapi_object_new hypot ' +
							'ibase_add_user ibase_affected_rows ibase_backup ibase_blob_add ibase_blob_cancel ' +
							'ibase_blob_close ibase_blob_create ibase_blob_echo ibase_blob_get ibase_blob_import ' +
							'ibase_blob_info ibase_blob_open ibase_close ibase_commit ibase_commit_ret ibase_connect ' +
							'ibase_db_info ibase_delete_user ibase_drop_db ibase_errcode ibase_errmsg ibase_execute ' +
							'ibase_fetch_assoc ibase_fetch_object ibase_fetch_row ibase_field_info ibase_free_event_handler ' +
							'ibase_free_query ibase_free_result ibase_gen_id ibase_maintain_db ibase_modify_user ' +
							'ibase_name_result ibase_num_fields ibase_num_params ibase_param_info ibase_pconnect ' +
							'ibase_prepare ibase_query ibase_restore ibase_rollback ibase_rollback_ret ibase_server_info ' +
							'ibase_service_attach ibase_service_detach ibase_set_event_handler ibase_timefmt ibase_trans ' +
							'ibase_wait_event iconv iconv_get_encoding iconv_mime_decode iconv_mime_decode_headers ' +
							'iconv_mime_encode iconv_set_encoding iconv_strlen iconv_strpos iconv_strrpos iconv_substr ' +
							'id3_get_frame_long_name id3_get_frame_short_name id3_get_genre_id id3_get_genre_list ' +
							'id3_get_genre_name id3_get_tag id3_get_version id3_remove_tag id3_set_tag idate idn_to_ascii ' +
							'idn_to_unicode idn_to_utf8 ifx_affected_rows ifx_blobinfile_mode ifx_byteasvarchar ifx_close ' +
							'ifx_connect ifx_copy_blob ifx_create_blob ifx_create_char ifx_do ifx_error ifx_errormsg ' +
							'ifx_fetch_row ifx_fieldproperties ifx_fieldtypes ifx_free_blob ifx_free_char ifx_free_result ' +
							'ifx_get_blob ifx_get_char ifx_getsqlca ifx_htmltbl_result ifx_nullformat ifx_num_fields ' +
							'ifx_num_rows ifx_pconnect ifx_prepare ifx_query ifx_textasvarchar ifx_update_blob ' +
							'ifx_update_char ifxus_close_slob ifxus_create_slob ifxus_free_slob ifxus_open_slob ' +
							'ifxus_read_slob ifxus_seek_slob ifxus_tell_slob ifxus_write_slob ignore_user_abort ' +
							'iis_add_server iis_get_dir_security iis_get_script_map iis_get_server_by_comment ' +
							'iis_get_server_by_path iis_get_server_rights iis_get_service_state iis_remove_server ' +
							'iis_set_app_settings iis_set_dir_security iis_set_script_map iis_set_server_rights ' +
							'iis_start_server iis_start_service iis_stop_server iis_stop_service image2wbmp ' +
							'image_type_to_extension image_type_to_mime_type imagealphablending imageantialias imagearc ' +
							'imagechar imagecharup imagecolorallocate imagecolorallocatealpha imagecolorat ' +
							'imagecolorclosest imagecolorclosestalpha imagecolorclosesthwb imagecolordeallocate ' +
							'imagecolorexact imagecolorexactalpha imagecolormatch imagecolorresolve imagecolorresolvealpha ' +
							'imagecolorset imagecolorsforindex imagecolorstotal imagecolortransparent imageconvolution ' +
							'imagecopy imagecopymerge imagecopymergegray imagecopyresampled imagecopyresized imagecreate ' +
							'imagecreatefromgd imagecreatefromgd2 imagecreatefromgd2part imagecreatefromgif ' +
							'imagecreatefromjpeg imagecreatefrompng imagecreatefromstring imagecreatefromwbmp ' +
							'imagecreatefromxbm imagecreatefromxpm imagecreatetruecolor imagedashedline imagedestroy ' +
							'imageellipse imagefill imagefilledarc imagefilledellipse imagefilledpolygon ' +
							'imagefilledrectangle imagefilltoborder imagefilter imagefontheight imagefontwidth imageftbbox ' +
							'imagefttext imagegammacorrect imagegd imagegd2 imagegif imagegrabscreen imagegrabwindow ' +
							'imageinterlace imageistruecolor imagejpeg imagelayereffect imageline imageloadfont ' +
							'imagepalettecopy imagepng imagepolygon imagepsbbox imagepsencodefont imagepsextendfont ' +
							'imagepsfreefont imagepsloadfont imagepsslantfont imagepstext imagerectangle imagerotate ' +
							'imagesavealpha imagesetbrush imagesetpixel imagesetstyle imagesetthickness imagesettile ' +
							'imagestring imagestringup imagesx imagesy imagetruecolortopalette imagettfbbox imagettftext ' +
							'imagetypes imagewbmp imagexbm imagick imagickdraw imagickpixel imagickpixeliterator ' +
							'imap_8bit imap_alerts imap_append imap_base64 imap_binary imap_body imap_bodystruct ' +
							'imap_check imap_clearflag_full imap_close imap_create imap_createmailbox imap_delete ' +
							'imap_deletemailbox imap_errors imap_expunge imap_fetch_overview imap_fetchbody ' +
							'imap_fetchheader imap_fetchmime imap_fetchstructure imap_fetchtext imap_gc imap_get_quota ' +
							'imap_get_quotaroot imap_getacl imap_getmailboxes imap_getsubscribed imap_header ' +
							'imap_headerinfo imap_headers imap_last_error imap_list imap_listmailbox imap_listscan ' +
							'imap_listsubscribed imap_lsub imap_mail imap_mail_compose imap_mail_copy imap_mail_move ' +
							'imap_mailboxmsginfo imap_mime_header_decode imap_msgno imap_num_msg imap_num_recent imap_open ' +
							'imap_ping imap_qprint imap_rename imap_renamemailbox imap_reopen imap_rfc822_parse_adrlist ' +
							'imap_rfc822_parse_headers imap_rfc822_write_address imap_savebody imap_scan imap_scanmailbox ' +
							'imap_search imap_set_quota imap_setacl imap_setflag_full imap_sort imap_status ' +
							'imap_subscribe imap_thread imap_timeout imap_uid imap_undelete imap_unsubscribe ' +
							'imap_utf7_decode imap_utf7_encode imap_utf8 implode import_request_variables in_array ' +
							'include include_once inclued_get_data inet_ntop inet_pton infiniteiterator ingres_autocommit ' +
							'ingres_autocommit_state ingres_charset ingres_close ingres_commit ingres_connect ' +
							'ingres_cursor ingres_errno ingres_error ingres_errsqlstate ingres_escape_string ' +
							'ingres_execute ingres_fetch_array ingres_fetch_assoc ingres_fetch_object ' +
							'ingres_fetch_proc_return ingres_fetch_row ingres_field_length ingres_field_name ' +
							'ingres_field_nullable ingres_field_precision ingres_field_scale ingres_field_type ' +
							'ingres_free_result ingres_next_error ingres_num_fields ingres_num_rows ingres_pconnect ' +
							'ingres_prepare ingres_query ingres_result_seek ingres_rollback ingres_set_environment ' +
							'ingres_unbuffered_query ini_alter ini_get ini_get_all ini_restore ini_set inotify_add_watch ' +
							'inotify_init inotify_queue_len inotify_read inotify_rm_watch interface_exists intl_error_name ' +
							'intl_get_error_code intl_get_error_message intl_is_failure intldateformatter intval ' +
							'invalidargumentexception ip2long iptcembed iptcparse is_a is_array is_bool is_callable ' +
							'is_dir is_double is_executable is_file is_finite is_float is_infinite is_int is_integer ' +
							'is_link is_long is_nan is_null is_numeric is_object is_readable is_real is_resource ' +
							'is_scalar is_soap_fault is_string is_subclass_of is_tainted is_uploaded_file is_writable ' +
							'is_writeable isset iterator iterator_apply iterator_count iterator_to_array ' +
							'iteratoraggregate iteratoriterator java_last_exception_clear java_last_exception_get ' +
							'jddayofweek jdmonthname jdtofrench jdtogregorian jdtojewish jdtojulian jdtounix jewishtojd ' +
							'join jpeg2wbmp json_decode json_encode json_last_error jsonserializable judy judy_type ' +
							'judy_version juliantojd kadm5_chpass_principal kadm5_create_principal kadm5_delete_principal ' +
							'kadm5_destroy kadm5_flush kadm5_get_policies kadm5_get_principal kadm5_get_principals ' +
							'kadm5_init_with_password kadm5_modify_principal key krsort ksort ' +
							'ktaglib_id3v2_attachedpictureframe ktaglib_id3v2_frame ktaglib_id3v2_tag ' +
							'ktaglib_mpeg_audioproperties ktaglib_mpeg_file ktaglib_tag lapack lapackexception lcfirst ' +
							'lcg_value lchgrp lchown ldap_8859_to_t61 ldap_add ldap_bind ldap_close ldap_compare ' +
							'ldap_connect ldap_control_paged_result ldap_control_paged_result_response ldap_count_entries ' +
							'ldap_delete ldap_dn2ufn ldap_err2str ldap_errno ldap_error ldap_explode_dn ' +
							'ldap_first_attribute ldap_first_entry ldap_first_reference ldap_free_result ' +
							'ldap_get_attributes ldap_get_dn ldap_get_entries ldap_get_option ldap_get_values ' +
							'ldap_get_values_len ldap_list ldap_mod_add ldap_mod_del ldap_mod_replace ldap_modify ' +
							'ldap_next_attribute ldap_next_entry ldap_next_reference ldap_parse_reference ldap_parse_result ' +
							'ldap_read ldap_rename ldap_sasl_bind ldap_search ldap_set_option ldap_set_rebind_proc ' +
							'ldap_sort ldap_start_tls ldap_t61_to_8859 ldap_unbind lengthexception levenshtein ' +
							'libxml_clear_errors libxml_disable_entity_loader libxml_get_errors libxml_get_last_error ' +
							'libxml_set_external_entity_loader libxml_set_streams_context libxml_use_internal_errors ' +
							'libxmlerror limititerator link linkinfo list locale localeconv localtime log log10 log1p ' +
							'logicexception long2ip lstat ltrim lua luaclosure lzf_compress lzf_decompress ' +
							'lzf_optimized_for m_checkstatus m_completeauthorizations m_connect m_connectionerror ' +
							'm_deletetrans m_destroyconn m_destroyengine m_getcell m_getcellbynum m_getcommadelimited ' +
							'm_getheader m_initconn m_initengine m_iscommadelimited m_maxconntimeout m_monitor ' +
							'm_numcolumns m_numrows m_parsecommadelimited m_responsekeys m_responseparam m_returnstatus ' +
							'm_setblocking m_setdropfile m_setip m_setssl m_setssl_cafile m_setssl_files m_settimeout ' +
							'm_sslcert_gen_hash m_transactionssent m_transinqueue m_transkeyval m_transnew m_transsend ' +
							'm_uwait m_validateidentifier m_verifyconnection m_verifysslcert magic_quotes_runtime mail ' +
							'mailparse_determine_best_xfer_encoding mailparse_msg_create mailparse_msg_extract_part ' +
							'mailparse_msg_extract_part_file mailparse_msg_extract_whole_part_file mailparse_msg_free ' +
							'mailparse_msg_get_part mailparse_msg_get_part_data mailparse_msg_get_structure ' +
							'mailparse_msg_parse mailparse_msg_parse_file mailparse_rfc822_parse_addresses ' +
							'mailparse_stream_encode mailparse_uudecode_all main max maxdb_affected_rows maxdb_autocommit ' +
							'maxdb_bind_param maxdb_bind_result maxdb_change_user maxdb_character_set_name ' +
							'maxdb_client_encoding maxdb_close maxdb_close_long_data maxdb_commit maxdb_connect ' +
							'maxdb_connect_errno maxdb_connect_error maxdb_data_seek maxdb_debug ' +
							'maxdb_disable_reads_from_master maxdb_disable_rpl_parse maxdb_dump_debug_info ' +
							'maxdb_embedded_connect maxdb_enable_reads_from_master maxdb_enable_rpl_parse maxdb_errno ' +
							'maxdb_error maxdb_escape_string maxdb_execute maxdb_fetch maxdb_fetch_array maxdb_fetch_assoc ' +
							'maxdb_fetch_field maxdb_fetch_field_direct maxdb_fetch_fields maxdb_fetch_lengths ' +
							'maxdb_fetch_object maxdb_fetch_row maxdb_field_count maxdb_field_seek maxdb_field_tell ' +
							'maxdb_free_result maxdb_get_client_info maxdb_get_client_version maxdb_get_host_info ' +
							'maxdb_get_metadata maxdb_get_proto_info maxdb_get_server_info maxdb_get_server_version ' +
							'maxdb_info maxdb_init maxdb_insert_id maxdb_kill maxdb_master_query maxdb_more_results ' +
							'maxdb_multi_query maxdb_next_result maxdb_num_fields maxdb_num_rows maxdb_options ' +
							'maxdb_param_count maxdb_ping maxdb_prepare maxdb_query maxdb_real_connect ' +
							'maxdb_real_escape_string maxdb_real_query maxdb_report maxdb_rollback maxdb_rpl_parse_enabled ' +
							'maxdb_rpl_probe maxdb_rpl_query_type maxdb_select_db maxdb_send_long_data maxdb_send_query ' +
							'maxdb_server_end maxdb_server_init maxdb_set_opt maxdb_sqlstate maxdb_ssl_set maxdb_stat ' +
							'maxdb_stmt_affected_rows maxdb_stmt_bind_param maxdb_stmt_bind_result maxdb_stmt_close ' +
							'maxdb_stmt_close_long_data maxdb_stmt_data_seek maxdb_stmt_errno maxdb_stmt_error ' +
							'maxdb_stmt_execute maxdb_stmt_fetch maxdb_stmt_free_result maxdb_stmt_init maxdb_stmt_num_rows ' +
							'maxdb_stmt_param_count maxdb_stmt_prepare maxdb_stmt_reset maxdb_stmt_result_metadata ' +
							'maxdb_stmt_send_long_data maxdb_stmt_sqlstate maxdb_stmt_store_result maxdb_store_result ' +
							'maxdb_thread_id maxdb_thread_safe maxdb_use_result maxdb_warning_count mb_check_encoding ' +
							'mb_convert_case mb_convert_encoding mb_convert_kana mb_convert_variables mb_decode_mimeheader ' +
							'mb_decode_numericentity mb_detect_encoding mb_detect_order mb_encode_mimeheader ' +
							'mb_encode_numericentity mb_encoding_aliases mb_ereg mb_ereg_match mb_ereg_replace ' +
							'mb_ereg_replace_callback mb_ereg_search mb_ereg_search_getpos mb_ereg_search_getregs ' +
							'mb_ereg_search_init mb_ereg_search_pos mb_ereg_search_regs mb_ereg_search_setpos mb_eregi ' +
							'mb_eregi_replace mb_get_info mb_http_input mb_http_output mb_internal_encoding mb_language ' +
							'mb_list_encodings mb_output_handler mb_parse_str mb_preferred_mime_name mb_regex_encoding ' +
							'mb_regex_set_options mb_send_mail mb_split mb_strcut mb_strimwidth mb_stripos mb_stristr ' +
							'mb_strlen mb_strpos mb_strrchr mb_strrichr mb_strripos mb_strrpos mb_strstr mb_strtolower ' +
							'mb_strtoupper mb_strwidth mb_substitute_character mb_substr mb_substr_count mcrypt_cbc ' +
							'mcrypt_cfb mcrypt_create_iv mcrypt_decrypt mcrypt_ecb mcrypt_enc_get_algorithms_name ' +
							'mcrypt_enc_get_block_size mcrypt_enc_get_iv_size mcrypt_enc_get_key_size ' +
							'mcrypt_enc_get_modes_name mcrypt_enc_get_supported_key_sizes mcrypt_enc_is_block_algorithm ' +
							'mcrypt_enc_is_block_algorithm_mode mcrypt_enc_is_block_mode mcrypt_enc_self_test mcrypt_encrypt ' +
							'mcrypt_generic mcrypt_generic_deinit mcrypt_generic_end mcrypt_generic_init ' +
							'mcrypt_get_block_size mcrypt_get_cipher_name mcrypt_get_iv_size mcrypt_get_key_size ' +
							'mcrypt_list_algorithms mcrypt_list_modes mcrypt_module_close mcrypt_module_get_algo_block_size ' +
							'mcrypt_module_get_algo_key_size mcrypt_module_get_supported_key_sizes ' +
							'mcrypt_module_is_block_algorithm mcrypt_module_is_block_algorithm_mode ' +
							'mcrypt_module_is_block_mode mcrypt_module_open mcrypt_module_self_test mcrypt_ofb md5 ' +
							'md5_file mdecrypt_generic memcache memcache_debug memcached memory_get_peak_usage ' +
							'memory_get_usage messageformatter metaphone method_exists mhash mhash_count ' +
							'mhash_get_block_size mhash_get_hash_name mhash_keygen_s2k microtime mime_content_type min ' +
							'ming_keypress ming_setcubicthreshold ming_setscale ming_setswfcompression ming_useconstants ' +
							'ming_useswfversion mkdir mktime money_format mongo mongobindata mongocode mongocollection ' +
							'mongoconnectionexception mongocursor mongocursorexception mongocursortimeoutexception ' +
							'mongodate mongodb mongodbref mongoexception mongogridfs mongogridfscursor ' +
							'mongogridfsexception mongogridfsfile mongoid mongoint32 mongoint64 mongolog mongomaxkey ' +
							'mongominkey mongopool mongoregex mongotimestamp move_uploaded_file mqseries_back ' +
							'mqseries_begin mqseries_close mqseries_cmit mqseries_conn mqseries_connx mqseries_disc ' +
							'mqseries_get mqseries_inq mqseries_open mqseries_put mqseries_put1 mqseries_set ' +
							'mqseries_strerror msession_connect msession_count msession_create msession_destroy ' +
							'msession_disconnect msession_find msession_get msession_get_array msession_get_data ' +
							'msession_inc msession_list msession_listvar msession_lock msession_plugin msession_randstr ' +
							'msession_set msession_set_array msession_set_data msession_timeout msession_uniq ' +
							'msession_unlock msg_get_queue msg_queue_exists msg_receive msg_remove_queue msg_send ' +
							'msg_set_queue msg_stat_queue msql msql_affected_rows msql_close msql_connect msql_create_db ' +
							'msql_createdb msql_data_seek msql_db_query msql_dbname msql_drop_db msql_error ' +
							'msql_fetch_array msql_fetch_field msql_fetch_object msql_fetch_row msql_field_flags ' +
							'msql_field_len msql_field_name msql_field_seek msql_field_table msql_field_type ' +
							'msql_fieldflags msql_fieldlen msql_fieldname msql_fieldtable msql_fieldtype msql_free_result ' +
							'msql_list_dbs msql_list_fields msql_list_tables msql_num_fields msql_num_rows msql_numfields ' +
							'msql_numrows msql_pconnect msql_query msql_regcase msql_result msql_select_db msql_tablename ' +
							'mssql_bind mssql_close mssql_connect mssql_data_seek mssql_execute mssql_fetch_array ' +
							'mssql_fetch_assoc mssql_fetch_batch mssql_fetch_field mssql_fetch_object mssql_fetch_row ' +
							'mssql_field_length mssql_field_name mssql_field_seek mssql_field_type mssql_free_result ' +
							'mssql_free_statement mssql_get_last_message mssql_guid_string mssql_init ' +
							'mssql_min_error_severity mssql_min_message_severity mssql_next_result mssql_num_fields ' +
							'mssql_num_rows mssql_pconnect mssql_query mssql_result mssql_rows_affected mssql_select_db ' +
							'mt_getrandmax mt_rand mt_srand multipleiterator mutex mysql_affected_rows ' +
							'mysql_client_encoding mysql_close mysql_connect mysql_create_db mysql_data_seek mysql_db_name ' +
							'mysql_db_query mysql_drop_db mysql_errno mysql_error mysql_escape_string mysql_fetch_array ' +
							'mysql_fetch_assoc mysql_fetch_field mysql_fetch_lengths mysql_fetch_object mysql_fetch_row ' +
							'mysql_field_flags mysql_field_len mysql_field_name mysql_field_seek mysql_field_table ' +
							'mysql_field_type mysql_free_result mysql_get_client_info mysql_get_host_info ' +
							'mysql_get_proto_info mysql_get_server_info mysql_info mysql_insert_id mysql_list_dbs ' +
							'mysql_list_fields mysql_list_processes mysql_list_tables mysql_num_fields mysql_num_rows ' +
							'mysql_pconnect mysql_ping mysql_query mysql_real_escape_string mysql_result mysql_select_db ' +
							'mysql_set_charset mysql_stat mysql_tablename mysql_thread_id mysql_unbuffered_query mysqli ' +
							'mysqli_bind_param mysqli_bind_result mysqli_client_encoding mysqli_connect ' +
							'mysqli_disable_rpl_parse mysqli_driver mysqli_enable_reads_from_master mysqli_enable_rpl_parse ' +
							'mysqli_escape_string mysqli_execute mysqli_fetch mysqli_get_cache_stats mysqli_get_metadata ' +
							'mysqli_master_query mysqli_param_count mysqli_report mysqli_result mysqli_rpl_parse_enabled ' +
							'mysqli_rpl_probe mysqli_send_long_data mysqli_set_opt mysqli_slave_query mysqli_sql_exception ' +
							'mysqli_stmt mysqli_warning mysqlnd_ms_get_last_gtid mysqlnd_ms_get_last_used_connection ' +
							'mysqlnd_ms_get_stats mysqlnd_ms_match_wild mysqlnd_ms_query_is_select mysqlnd_ms_set_qos ' +
							'mysqlnd_ms_set_user_pick_server mysqlnd_qc_clear_cache mysqlnd_qc_get_available_handlers ' +
							'mysqlnd_qc_get_cache_info mysqlnd_qc_get_core_stats mysqlnd_qc_get_normalized_query_trace_log ' +
							'mysqlnd_qc_get_query_trace_log mysqlnd_qc_set_cache_condition mysqlnd_qc_set_is_select ' +
							'mysqlnd_qc_set_storage_handler mysqlnd_qc_set_user_handlers mysqlnd_uh_convert_to_mysqlnd ' +
							'mysqlnd_uh_set_connection_proxy mysqlnd_uh_set_statement_proxy mysqlnduhconnection ' +
							'mysqlnduhpreparedstatement natcasesort natsort ncurses_addch ncurses_addchnstr ' +
							'ncurses_addchstr ncurses_addnstr ncurses_addstr ncurses_assume_default_colors ncurses_attroff ' +
							'ncurses_attron ncurses_attrset ncurses_baudrate ncurses_beep ncurses_bkgd ncurses_bkgdset ' +
							'ncurses_border ncurses_bottom_panel ncurses_can_change_color ncurses_cbreak ncurses_clear ' +
							'ncurses_clrtobot ncurses_clrtoeol ncurses_color_content ncurses_color_set ncurses_curs_set ' +
							'ncurses_def_prog_mode ncurses_def_shell_mode ncurses_define_key ncurses_del_panel ' +
							'ncurses_delay_output ncurses_delch ncurses_deleteln ncurses_delwin ncurses_doupdate ' +
							'ncurses_echo ncurses_echochar ncurses_end ncurses_erase ncurses_erasechar ncurses_filter ' +
							'ncurses_flash ncurses_flushinp ncurses_getch ncurses_getmaxyx ncurses_getmouse ncurses_getyx ' +
							'ncurses_halfdelay ncurses_has_colors ncurses_has_ic ncurses_has_il ncurses_has_key ' +
							'ncurses_hide_panel ncurses_hline ncurses_inch ncurses_init ncurses_init_color ' +
							'ncurses_init_pair ncurses_insch ncurses_insdelln ncurses_insertln ncurses_insstr ' +
							'ncurses_instr ncurses_isendwin ncurses_keyok ncurses_keypad ncurses_killchar ncurses_longname ' +
							'ncurses_meta ncurses_mouse_trafo ncurses_mouseinterval ncurses_mousemask ncurses_move ' +
							'ncurses_move_panel ncurses_mvaddch ncurses_mvaddchnstr ncurses_mvaddchstr ncurses_mvaddnstr ' +
							'ncurses_mvaddstr ncurses_mvcur ncurses_mvdelch ncurses_mvgetch ncurses_mvhline ncurses_mvinch ' +
							'ncurses_mvvline ncurses_mvwaddstr ncurses_napms ncurses_new_panel ncurses_newpad ' +
							'ncurses_newwin ncurses_nl ncurses_nocbreak ncurses_noecho ncurses_nonl ncurses_noqiflush ' +
							'ncurses_noraw ncurses_pair_content ncurses_panel_above ncurses_panel_below ' +
							'ncurses_panel_window ncurses_pnoutrefresh ncurses_prefresh ncurses_putp ncurses_qiflush ' +
							'ncurses_raw ncurses_refresh ncurses_replace_panel ncurses_reset_prog_mode ' +
							'ncurses_reset_shell_mode ncurses_resetty ncurses_savetty ncurses_scr_dump ncurses_scr_init ' +
							'ncurses_scr_restore ncurses_scr_set ncurses_scrl ncurses_show_panel ncurses_slk_attr ' +
							'ncurses_slk_attroff ncurses_slk_attron ncurses_slk_attrset ncurses_slk_clear ncurses_slk_color ' +
							'ncurses_slk_init ncurses_slk_noutrefresh ncurses_slk_refresh ncurses_slk_restore ' +
							'ncurses_slk_set ncurses_slk_touch ncurses_standend ncurses_standout ncurses_start_color ' +
							'ncurses_termattrs ncurses_termname ncurses_timeout ncurses_top_panel ncurses_typeahead ' +
							'ncurses_ungetch ncurses_ungetmouse ncurses_update_panels ncurses_use_default_colors ' +
							'ncurses_use_env ncurses_use_extended_names ncurses_vidattr ncurses_vline ncurses_waddch ' +
							'ncurses_waddstr ncurses_wattroff ncurses_wattron ncurses_wattrset ncurses_wborder ' +
							'ncurses_wclear ncurses_wcolor_set ncurses_werase ncurses_wgetch ncurses_whline ' +
							'ncurses_wmouse_trafo ncurses_wmove ncurses_wnoutrefresh ncurses_wrefresh ncurses_wstandend ' +
							'ncurses_wstandout ncurses_wvline newt_bell newt_button newt_button_bar newt_centered_window ' +
							'newt_checkbox newt_checkbox_get_value newt_checkbox_set_flags newt_checkbox_set_value ' +
							'newt_checkbox_tree newt_checkbox_tree_add_item newt_checkbox_tree_find_item ' +
							'newt_checkbox_tree_get_current newt_checkbox_tree_get_entry_value ' +
							'newt_checkbox_tree_get_multi_selection newt_checkbox_tree_get_selection newt_checkbox_tree_multi ' +
							'newt_checkbox_tree_set_current newt_checkbox_tree_set_entry newt_checkbox_tree_set_entry_value ' +
							'newt_checkbox_tree_set_width newt_clear_key_buffer newt_cls newt_compact_button ' +
							'newt_component_add_callback newt_component_takes_focus newt_create_grid newt_cursor_off ' +
							'newt_cursor_on newt_delay newt_draw_form newt_draw_root_text newt_entry newt_entry_get_value ' +
							'newt_entry_set newt_entry_set_filter newt_entry_set_flags newt_finished newt_form ' +
							'newt_form_add_component newt_form_add_components newt_form_add_hot_key newt_form_destroy ' +
							'newt_form_get_current newt_form_run newt_form_set_background newt_form_set_height ' +
							'newt_form_set_size newt_form_set_timer newt_form_set_width newt_form_watch_fd ' +
							'newt_get_screen_size newt_grid_add_components_to_form newt_grid_basic_window newt_grid_free ' +
							'newt_grid_get_size newt_grid_h_close_stacked newt_grid_h_stacked newt_grid_place ' +
							'newt_grid_set_field newt_grid_simple_window newt_grid_v_close_stacked newt_grid_v_stacked ' +
							'newt_grid_wrapped_window newt_grid_wrapped_window_at newt_init newt_label newt_label_set_text ' +
							'newt_listbox newt_listbox_append_entry newt_listbox_clear newt_listbox_clear_selection ' +
							'newt_listbox_delete_entry newt_listbox_get_current newt_listbox_get_selection ' +
							'newt_listbox_insert_entry newt_listbox_item_count newt_listbox_select_item ' +
							'newt_listbox_set_current newt_listbox_set_current_by_key newt_listbox_set_data ' +
							'newt_listbox_set_entry newt_listbox_set_width newt_listitem newt_listitem_get_data ' +
							'newt_listitem_set newt_open_window newt_pop_help_line newt_pop_window newt_push_help_line ' +
							'newt_radio_get_current newt_radiobutton newt_redraw_help_line newt_reflow_text newt_refresh ' +
							'newt_resize_screen newt_resume newt_run_form newt_scale newt_scale_set newt_scrollbar_set ' +
							'newt_set_help_callback newt_set_suspend_callback newt_suspend newt_textbox ' +
							'newt_textbox_get_num_lines newt_textbox_reflowed newt_textbox_set_height newt_textbox_set_text ' +
							'newt_vertical_scrollbar newt_wait_for_key newt_win_choice newt_win_entries newt_win_menu ' +
							'newt_win_message newt_win_messagev newt_win_ternary next ngettext nl2br nl_langinfo ' +
							'norewinditerator normalizer notes_body notes_copy_db notes_create_db notes_create_note ' +
							'notes_drop_db notes_find_note notes_header_info notes_list_msgs notes_mark_read ' +
							'notes_mark_unread notes_nav_create notes_search notes_unread notes_version ' +
							'nsapi_request_headers nsapi_response_headers nsapi_virtual nthmac number_format ' +
							'numberformatter oauth oauth_get_sbs oauth_urlencode oauthexception oauthprovider ob_clean ' +
							'ob_deflatehandler ob_end_clean ob_end_flush ob_etaghandler ob_flush ob_get_clean ' +
							'ob_get_contents ob_get_flush ob_get_length ob_get_level ob_get_status ob_gzhandler ' +
							'ob_iconv_handler ob_implicit_flush ob_inflatehandler ob_list_handlers ob_start ob_tidyhandler ' +
							'oci_bind_array_by_name oci_bind_by_name oci_cancel oci_client_version oci_close oci_commit ' +
							'oci_connect oci_define_by_name oci_error oci_execute oci_fetch oci_fetch_all oci_fetch_array ' +
							'oci_fetch_assoc oci_fetch_object oci_fetch_row oci_field_is_null oci_field_name ' +
							'oci_field_precision oci_field_scale oci_field_size oci_field_type oci_field_type_raw ' +
							'oci_free_statement oci_internal_debug oci_lob_copy oci_lob_is_equal oci_new_collection ' +
							'oci_new_connect oci_new_cursor oci_new_descriptor oci_num_fields oci_num_rows oci_parse ' +
							'oci_password_change oci_pconnect oci_result oci_rollback oci_server_version oci_set_action ' +
							'oci_set_client_identifier oci_set_client_info oci_set_edition oci_set_module_name ' +
							'oci_set_prefetch oci_statement_type ocibindbyname ocicancel ocicloselob ocicollappend ' +
							'ocicollassign ocicollassignelem ocicollgetelem ocicollmax ocicollsize ocicolltrim ' +
							'ocicolumnisnull ocicolumnname ocicolumnprecision ocicolumnscale ocicolumnsize ocicolumntype ' +
							'ocicolumntyperaw ocicommit ocidefinebyname ocierror ociexecute ocifetch ocifetchinto ' +
							'ocifetchstatement ocifreecollection ocifreecursor ocifreedesc ocifreestatement ' +
							'ociinternaldebug ociloadlob ocilogoff ocilogon ocinewcollection ocinewcursor ' +
							'ocinewdescriptor ocinlogon ocinumcols ociparse ociplogon ociresult ocirollback ocirowcount ' +
							'ocisavelob ocisavelobfile ociserverversion ocisetprefetch ocistatementtype ociwritelobtofile ' +
							'ociwritetemporarylob octdec odbc_autocommit odbc_binmode odbc_close odbc_close_all ' +
							'odbc_columnprivileges odbc_columns odbc_commit odbc_connect odbc_cursor odbc_data_source ' +
							'odbc_do odbc_error odbc_errormsg odbc_exec odbc_execute odbc_fetch_array odbc_fetch_into ' +
							'odbc_fetch_object odbc_fetch_row odbc_field_len odbc_field_name odbc_field_num ' +
							'odbc_field_precision odbc_field_scale odbc_field_type odbc_foreignkeys odbc_free_result ' +
							'odbc_gettypeinfo odbc_longreadlen odbc_next_result odbc_num_fields odbc_num_rows ' +
							'odbc_pconnect odbc_prepare odbc_primarykeys odbc_procedurecolumns odbc_procedures odbc_result ' +
							'odbc_result_all odbc_rollback odbc_setoption odbc_specialcolumns odbc_statistics ' +
							'odbc_tableprivileges odbc_tables openal_buffer_create openal_buffer_data openal_buffer_destroy ' +
							'openal_buffer_get openal_buffer_loadwav openal_context_create openal_context_current ' +
							'openal_context_destroy openal_context_process openal_context_suspend openal_device_close ' +
							'openal_device_open openal_listener_get openal_listener_set openal_source_create ' +
							'openal_source_destroy openal_source_get openal_source_pause openal_source_play ' +
							'openal_source_rewind openal_source_set openal_source_stop openal_stream opendir openlog ' +
							'openssl_cipher_iv_length openssl_csr_export openssl_csr_export_to_file ' +
							'openssl_csr_get_public_key openssl_csr_get_subject openssl_csr_new openssl_csr_sign ' +
							'openssl_decrypt openssl_dh_compute_key openssl_digest openssl_encrypt openssl_error_string ' +
							'openssl_free_key openssl_get_cipher_methods openssl_get_md_methods openssl_get_privatekey ' +
							'openssl_get_publickey openssl_open openssl_pkcs12_export openssl_pkcs12_export_to_file ' +
							'openssl_pkcs12_read openssl_pkcs7_decrypt openssl_pkcs7_encrypt openssl_pkcs7_sign ' +
							'openssl_pkcs7_verify openssl_pkey_export openssl_pkey_export_to_file openssl_pkey_free ' +
							'openssl_pkey_get_details openssl_pkey_get_private openssl_pkey_get_public openssl_pkey_new ' +
							'openssl_private_decrypt openssl_private_encrypt openssl_public_decrypt openssl_public_encrypt ' +
							'openssl_random_pseudo_bytes openssl_seal openssl_sign openssl_verify ' +
							'openssl_x509_check_private_key openssl_x509_checkpurpose openssl_x509_export ' +
							'openssl_x509_export_to_file openssl_x509_free openssl_x509_parse openssl_x509_read ord ' +
							'outeriterator outofboundsexception outofrangeexception output_add_rewrite_var ' +
							'output_reset_rewrite_vars overflowexception override_function ovrimos_close ovrimos_commit ' +
							'ovrimos_connect ovrimos_cursor ovrimos_exec ovrimos_execute ovrimos_fetch_into ' +
							'ovrimos_fetch_row ovrimos_field_len ovrimos_field_name ovrimos_field_num ovrimos_field_type ' +
							'ovrimos_free_result ovrimos_longreadlen ovrimos_num_fields ovrimos_num_rows ovrimos_prepare ' +
							'ovrimos_result ovrimos_result_all ovrimos_rollback pack parentiterator parse_ini_file ' +
							'parse_ini_string parse_str parse_url parsekit_compile_file parsekit_compile_string ' +
							'parsekit_func_arginfo passthru pathinfo pclose pcntl_alarm pcntl_exec pcntl_fork ' +
							'pcntl_getpriority pcntl_setpriority pcntl_signal pcntl_signal_dispatch pcntl_sigprocmask ' +
							'pcntl_sigtimedwait pcntl_sigwaitinfo pcntl_wait pcntl_waitpid pcntl_wexitstatus ' +
							'pcntl_wifexited pcntl_wifsignaled pcntl_wifstopped pcntl_wstopsig pcntl_wtermsig ' +
							'pdf_activate_item pdf_add_annotation pdf_add_bookmark pdf_add_launchlink pdf_add_locallink ' +
							'pdf_add_nameddest pdf_add_note pdf_add_outline pdf_add_pdflink pdf_add_table_cell ' +
							'pdf_add_textflow pdf_add_thumbnail pdf_add_weblink pdf_arc pdf_arcn pdf_attach_file ' +
							'pdf_begin_document pdf_begin_font pdf_begin_glyph pdf_begin_item pdf_begin_layer ' +
							'pdf_begin_page pdf_begin_page_ext pdf_begin_pattern pdf_begin_template pdf_begin_template_ext ' +
							'pdf_circle pdf_clip pdf_close pdf_close_image pdf_close_pdi pdf_close_pdi_page pdf_closepath ' +
							'pdf_closepath_fill_stroke pdf_closepath_stroke pdf_concat pdf_continue_text pdf_create_3dview ' +
							'pdf_create_action pdf_create_annotation pdf_create_bookmark pdf_create_field ' +
							'pdf_create_fieldgroup pdf_create_gstate pdf_create_pvf pdf_create_textflow pdf_curveto ' +
							'pdf_define_layer pdf_delete pdf_delete_pvf pdf_delete_table pdf_delete_textflow ' +
							'pdf_encoding_set_char pdf_end_document pdf_end_font pdf_end_glyph pdf_end_item pdf_end_layer ' +
							'pdf_end_page pdf_end_page_ext pdf_end_pattern pdf_end_template pdf_endpath pdf_fill ' +
							'pdf_fill_imageblock pdf_fill_pdfblock pdf_fill_stroke pdf_fill_textblock pdf_findfont ' +
							'pdf_fit_image pdf_fit_pdi_page pdf_fit_table pdf_fit_textflow pdf_fit_textline ' +
							'pdf_get_apiname pdf_get_buffer pdf_get_errmsg pdf_get_errnum pdf_get_font pdf_get_fontname ' +
							'pdf_get_fontsize pdf_get_image_height pdf_get_image_width pdf_get_majorversion ' +
							'pdf_get_minorversion pdf_get_parameter pdf_get_pdi_parameter pdf_get_pdi_value pdf_get_value ' +
							'pdf_info_font pdf_info_matchbox pdf_info_table pdf_info_textflow pdf_info_textline ' +
							'pdf_initgraphics pdf_lineto pdf_load_3ddata pdf_load_font pdf_load_iccprofile pdf_load_image ' +
							'pdf_makespotcolor pdf_moveto pdf_new pdf_open_ccitt pdf_open_file pdf_open_gif ' +
							'pdf_open_image pdf_open_image_file pdf_open_jpeg pdf_open_memory_image pdf_open_pdi ' +
							'pdf_open_pdi_document pdf_open_pdi_page pdf_open_tiff pdf_pcos_get_number pdf_pcos_get_stream ' +
							'pdf_pcos_get_string pdf_place_image pdf_place_pdi_page pdf_process_pdi pdf_rect pdf_restore ' +
							'pdf_resume_page pdf_rotate pdf_save pdf_scale pdf_set_border_color pdf_set_border_dash ' +
							'pdf_set_border_style pdf_set_char_spacing pdf_set_duration pdf_set_gstate ' +
							'pdf_set_horiz_scaling pdf_set_info pdf_set_info_author pdf_set_info_creator ' +
							'pdf_set_info_keywords pdf_set_info_subject pdf_set_info_title pdf_set_layer_dependency ' +
							'pdf_set_leading pdf_set_parameter pdf_set_text_matrix pdf_set_text_pos pdf_set_text_rendering ' +
							'pdf_set_text_rise pdf_set_value pdf_set_word_spacing pdf_setcolor pdf_setdash ' +
							'pdf_setdashpattern pdf_setflat pdf_setfont pdf_setgray pdf_setgray_fill pdf_setgray_stroke ' +
							'pdf_setlinecap pdf_setlinejoin pdf_setlinewidth pdf_setmatrix pdf_setmiterlimit ' +
							'pdf_setpolydash pdf_setrgbcolor pdf_setrgbcolor_fill pdf_setrgbcolor_stroke pdf_shading ' +
							'pdf_shading_pattern pdf_shfill pdf_show pdf_show_boxed pdf_show_xy pdf_skew pdf_stringwidth ' +
							'pdf_stroke pdf_suspend_page pdf_translate pdf_utf16_to_utf8 pdf_utf32_to_utf16 ' +
							'pdf_utf8_to_utf16 pdo pdoexception pdostatement pfsockopen pg_affected_rows pg_cancel_query ' +
							'pg_client_encoding pg_close pg_connect pg_connection_busy pg_connection_reset ' +
							'pg_connection_status pg_convert pg_copy_from pg_copy_to pg_dbname pg_delete pg_end_copy ' +
							'pg_escape_bytea pg_escape_identifier pg_escape_literal pg_escape_string pg_execute ' +
							'pg_fetch_all pg_fetch_all_columns pg_fetch_array pg_fetch_assoc pg_fetch_object ' +
							'pg_fetch_result pg_fetch_row pg_field_is_null pg_field_name pg_field_num pg_field_prtlen ' +
							'pg_field_size pg_field_table pg_field_type pg_field_type_oid pg_free_result pg_get_notify ' +
							'pg_get_pid pg_get_result pg_host pg_insert pg_last_error pg_last_notice pg_last_oid ' +
							'pg_lo_close pg_lo_create pg_lo_export pg_lo_import pg_lo_open pg_lo_read pg_lo_read_all ' +
							'pg_lo_seek pg_lo_tell pg_lo_unlink pg_lo_write pg_meta_data pg_num_fields pg_num_rows ' +
							'pg_options pg_parameter_status pg_pconnect pg_ping pg_port pg_prepare pg_put_line pg_query ' +
							'pg_query_params pg_result_error pg_result_error_field pg_result_seek pg_result_status ' +
							'pg_select pg_send_execute pg_send_prepare pg_send_query pg_send_query_params ' +
							'pg_set_client_encoding pg_set_error_verbosity pg_trace pg_transaction_status pg_tty ' +
							'pg_unescape_bytea pg_untrace pg_update pg_version phar phardata pharexception pharfileinfo ' +
							'php_check_syntax php_ini_loaded_file php_ini_scanned_files php_logo_guid php_sapi_name ' +
							'php_strip_whitespace php_uname php_user_filter phpcredits phpinfo phpversion pi png2wbmp ' +
							'popen pos posix_access posix_ctermid posix_errno posix_get_last_error posix_getcwd ' +
							'posix_getegid posix_geteuid posix_getgid posix_getgrgid posix_getgrnam posix_getgroups ' +
							'posix_getlogin posix_getpgid posix_getpgrp posix_getpid posix_getppid posix_getpwnam ' +
							'posix_getpwuid posix_getrlimit posix_getsid posix_getuid posix_initgroups posix_isatty ' +
							'posix_kill posix_mkfifo posix_mknod posix_setegid posix_seteuid posix_setgid posix_setpgid ' +
							'posix_setsid posix_setuid posix_strerror posix_times posix_ttyname posix_uname pow ' +
							'preg_filter preg_grep preg_last_error preg_match preg_match_all preg_quote preg_replace ' +
							'preg_replace_callback preg_split prev print print_r printer_abort printer_close ' +
							'printer_create_brush printer_create_dc printer_create_font printer_create_pen ' +
							'printer_delete_brush printer_delete_dc printer_delete_font printer_delete_pen printer_draw_bmp ' +
							'printer_draw_chord printer_draw_elipse printer_draw_line printer_draw_pie ' +
							'printer_draw_rectangle printer_draw_roundrect printer_draw_text printer_end_doc ' +
							'printer_end_page printer_get_option printer_list printer_logical_fontheight printer_open ' +
							'printer_select_brush printer_select_font printer_select_pen printer_set_option ' +
							'printer_start_doc printer_start_page printer_write printf proc_close proc_get_status ' +
							'proc_nice proc_open proc_terminate property_exists ps_add_bookmark ps_add_launchlink ' +
							'ps_add_locallink ps_add_note ps_add_pdflink ps_add_weblink ps_arc ps_arcn ps_begin_page ' +
							'ps_begin_pattern ps_begin_template ps_circle ps_clip ps_close ps_close_image ps_closepath ' +
							'ps_closepath_stroke ps_continue_text ps_curveto ps_delete ps_end_page ps_end_pattern ' +
							'ps_end_template ps_fill ps_fill_stroke ps_findfont ps_get_buffer ps_get_parameter ' +
							'ps_get_value ps_hyphenate ps_include_file ps_lineto ps_makespotcolor ps_moveto ps_new ' +
							'ps_open_file ps_open_image ps_open_image_file ps_open_memory_image ps_place_image ps_rect ' +
							'ps_restore ps_rotate ps_save ps_scale ps_set_border_color ps_set_border_dash ' +
							'ps_set_border_style ps_set_info ps_set_parameter ps_set_text_pos ps_set_value ps_setcolor ' +
							'ps_setdash ps_setflat ps_setfont ps_setgray ps_setlinecap ps_setlinejoin ps_setlinewidth ' +
							'ps_setmiterlimit ps_setoverprintmode ps_setpolydash ps_shading ps_shading_pattern ps_shfill ' +
							'ps_show ps_show2 ps_show_boxed ps_show_xy ps_show_xy2 ps_string_geometry ps_stringwidth ' +
							'ps_stroke ps_symbol ps_symbol_name ps_symbol_width ps_translate pspell_add_to_personal ' +
							'pspell_add_to_session pspell_check pspell_clear_session pspell_config_create ' +
							'pspell_config_data_dir pspell_config_dict_dir pspell_config_ignore pspell_config_mode ' +
							'pspell_config_personal pspell_config_repl pspell_config_runtogether pspell_config_save_repl ' +
							'pspell_new pspell_new_config pspell_new_personal pspell_save_wordlist pspell_store_replacement ' +
							'pspell_suggest putenv px_close px_create_fp px_date2string px_delete px_delete_record ' +
							'px_get_field px_get_info px_get_parameter px_get_record px_get_schema px_get_value ' +
							'px_insert_record px_new px_numfields px_numrecords px_open_fp px_put_record ' +
							'px_retrieve_record px_set_blob_file px_set_parameter px_set_tablename px_set_targetencoding ' +
							'px_set_value px_timestamp2string px_update_record qdom_error qdom_tree quickhashinthash ' +
							'quickhashintset quickhashintstringhash quickhashstringinthash quoted_printable_decode ' +
							'quoted_printable_encode quotemeta rad2deg radius_acct_open radius_add_server radius_auth_open ' +
							'radius_close radius_config radius_create_request radius_cvt_addr radius_cvt_int ' +
							'radius_cvt_string radius_demangle radius_demangle_mppe_key radius_get_attr ' +
							'radius_get_vendor_attr radius_put_addr radius_put_attr radius_put_int radius_put_string ' +
							'radius_put_vendor_addr radius_put_vendor_attr radius_put_vendor_int radius_put_vendor_string ' +
							'radius_request_authenticator radius_send_request radius_server_secret radius_strerror rand ' +
							'range rangeexception rar_wrapper_cache_stats rararchive rarentry rarexception rawurldecode ' +
							'rawurlencode read_exif_data readdir readfile readgzfile readline readline_add_history ' +
							'readline_callback_handler_install readline_callback_handler_remove readline_callback_read_char ' +
							'readline_clear_history readline_completion_function readline_info readline_list_history ' +
							'readline_on_new_line readline_read_history readline_redisplay readline_write_history readlink ' +
							'realpath realpath_cache_get realpath_cache_size recode recode_file recode_string ' +
							'recursivearrayiterator recursivecachingiterator recursivecallbackfilteriterator ' +
							'recursivedirectoryiterator recursivefilteriterator recursiveiterator recursiveiteratoriterator ' +
							'recursiveregexiterator recursivetreeiterator reflection reflectionclass reflectionexception ' +
							'reflectionextension reflectionfunction reflectionfunctionabstract reflectionmethod ' +
							'reflectionobject reflectionparameter reflectionproperty reflectionzendextension reflector ' +
							'regexiterator register_shutdown_function register_tick_function rename rename_function ' +
							'require require_once reset resourcebundle restore_error_handler restore_exception_handler ' +
							'restore_include_path return rewind rewinddir rmdir round rpm_close rpm_get_tag ' +
							'rpm_is_valid rpm_open rpm_version rrd_create rrd_error rrd_fetch rrd_first rrd_graph ' +
							'rrd_info rrd_last rrd_lastupdate rrd_restore rrd_tune rrd_update rrd_version rrd_xport ' +
							'rrdcreator rrdgraph rrdupdater rsort rtrim runkit_class_adopt runkit_class_emancipate ' +
							'runkit_constant_add runkit_constant_redefine runkit_constant_remove runkit_function_add ' +
							'runkit_function_copy runkit_function_redefine runkit_function_remove runkit_function_rename ' +
							'runkit_import runkit_lint runkit_lint_file runkit_method_add runkit_method_copy ' +
							'runkit_method_redefine runkit_method_remove runkit_method_rename runkit_return_value_used ' +
							'runkit_sandbox_output_handler runkit_superglobals runtimeexception scandir seekableiterator ' +
							'sem_acquire sem_get sem_release sem_remove serializable serialize session_cache_expire ' +
							'session_cache_limiter session_commit session_decode session_destroy session_encode ' +
							'session_get_cookie_params session_id session_is_registered session_module_name session_name ' +
							'session_pgsql_add_error session_pgsql_get_error session_pgsql_get_field session_pgsql_reset ' +
							'session_pgsql_set_field session_pgsql_status session_regenerate_id session_register ' +
							'session_register_shutdown session_save_path session_set_cookie_params session_set_save_handler ' +
							'session_start session_status session_unregister session_unset session_write_close ' +
							'sessionhandler sessionhandlerinterface set_error_handler set_exception_handler set_file_buffer ' +
							'set_include_path set_magic_quotes_runtime set_socket_blocking set_time_limit setcookie ' +
							'setlocale setproctitle setrawcookie setthreadtitle settype sha1 sha1_file shell_exec ' +
							'shm_attach shm_detach shm_get_var shm_has_var shm_put_var shm_remove shm_remove_var ' +
							'shmop_close shmop_delete shmop_open shmop_read shmop_size shmop_write show_source shuffle ' +
							'signeurlpaiement similar_text simplexml_import_dom simplexml_load_file simplexml_load_string ' +
							'simplexmlelement simplexmliterator sin sinh sizeof sleep snmp snmp2_get snmp2_getnext ' +
							'snmp2_real_walk snmp2_set snmp2_walk snmp3_get snmp3_getnext snmp3_real_walk snmp3_set ' +
							'snmp3_walk snmp_get_quick_print snmp_get_valueretrieval snmp_read_mib snmp_set_enum_print ' +
							'snmp_set_oid_numeric_print snmp_set_oid_output_format snmp_set_quick_print ' +
							'snmp_set_valueretrieval snmpexception snmpget snmpgetnext snmprealwalk snmpset snmpwalk ' +
							'snmpwalkoid soapclient soapfault soapheader soapparam soapserver soapvar socket_accept ' +
							'socket_bind socket_clear_error socket_close socket_connect socket_create socket_create_listen ' +
							'socket_create_pair socket_get_option socket_get_status socket_getpeername socket_getsockname ' +
							'socket_import_stream socket_last_error socket_listen socket_read socket_recv socket_recvfrom ' +
							'socket_select socket_send socket_sendto socket_set_block socket_set_blocking ' +
							'socket_set_nonblock socket_set_option socket_set_timeout socket_shutdown socket_strerror ' +
							'socket_write solr_get_version solrclient solrclientexception solrdocument solrdocumentfield ' +
							'solrexception solrgenericresponse solrillegalargumentexception solrillegaloperationexception ' +
							'solrinputdocument solrmodifiableparams solrobject solrparams solrpingresponse solrquery ' +
							'solrqueryresponse solrresponse solrupdateresponse solrutils sort soundex sphinxclient ' +
							'spl_autoload spl_autoload_call spl_autoload_extensions spl_autoload_functions ' +
							'spl_autoload_register spl_autoload_unregister spl_classes spl_object_hash splbool ' +
							'spldoublylinkedlist splenum splfileinfo splfileobject splfixedarray splfloat splheap splint ' +
							'split spliti splmaxheap splminheap splobjectstorage splobserver splpriorityqueue splqueue ' +
							'splstack splstring splsubject spltempfileobject spltype spoofchecker sprintf sql_regcase ' +
							'sqlite3 sqlite3result sqlite3stmt sqlite_array_query sqlite_busy_timeout sqlite_changes ' +
							'sqlite_close sqlite_column sqlite_create_aggregate sqlite_create_function sqlite_current ' +
							'sqlite_error_string sqlite_escape_string sqlite_exec sqlite_factory sqlite_fetch_all ' +
							'sqlite_fetch_array sqlite_fetch_column_types sqlite_fetch_object sqlite_fetch_single ' +
							'sqlite_fetch_string sqlite_field_name sqlite_has_more sqlite_has_prev sqlite_key ' +
							'sqlite_last_error sqlite_last_insert_rowid sqlite_libencoding sqlite_libversion sqlite_next ' +
							'sqlite_num_fields sqlite_num_rows sqlite_open sqlite_popen sqlite_prev sqlite_query ' +
							'sqlite_rewind sqlite_seek sqlite_single_query sqlite_udf_decode_binary ' +
							'sqlite_udf_encode_binary sqlite_unbuffered_query sqlite_valid sqlsrv_begin_transaction ' +
							'sqlsrv_cancel sqlsrv_client_info sqlsrv_close sqlsrv_commit sqlsrv_configure sqlsrv_connect ' +
							'sqlsrv_errors sqlsrv_execute sqlsrv_fetch sqlsrv_fetch_array sqlsrv_fetch_object ' +
							'sqlsrv_field_metadata sqlsrv_free_stmt sqlsrv_get_config sqlsrv_get_field sqlsrv_has_rows ' +
							'sqlsrv_next_result sqlsrv_num_fields sqlsrv_num_rows sqlsrv_prepare sqlsrv_query ' +
							'sqlsrv_rollback sqlsrv_rows_affected sqlsrv_send_stream_data sqlsrv_server_info sqrt srand ' +
							'sscanf ssdeep_fuzzy_compare ssdeep_fuzzy_hash ssdeep_fuzzy_hash_filename ' +
							'ssh2_auth_hostbased_file ssh2_auth_none ssh2_auth_password ssh2_auth_pubkey_file ssh2_connect ' +
							'ssh2_exec ssh2_fetch_stream ssh2_fingerprint ssh2_methods_negotiated ssh2_publickey_add ' +
							'ssh2_publickey_init ssh2_publickey_list ssh2_publickey_remove ssh2_scp_recv ssh2_scp_send ' +
							'ssh2_sftp ssh2_sftp_lstat ssh2_sftp_mkdir ssh2_sftp_readlink ssh2_sftp_realpath ' +
							'ssh2_sftp_rename ssh2_sftp_rmdir ssh2_sftp_stat ssh2_sftp_symlink ssh2_sftp_unlink ssh2_shell ' +
							'ssh2_tunnel stat stats_absolute_deviation stats_cdf_beta stats_cdf_binomial stats_cdf_cauchy ' +
							'stats_cdf_chisquare stats_cdf_exponential stats_cdf_f stats_cdf_gamma stats_cdf_laplace ' +
							'stats_cdf_logistic stats_cdf_negative_binomial stats_cdf_noncentral_chisquare ' +
							'stats_cdf_noncentral_f stats_cdf_poisson stats_cdf_t stats_cdf_uniform stats_cdf_weibull ' +
							'stats_covariance stats_den_uniform stats_dens_beta stats_dens_cauchy stats_dens_chisquare ' +
							'stats_dens_exponential stats_dens_f stats_dens_gamma stats_dens_laplace stats_dens_logistic ' +
							'stats_dens_negative_binomial stats_dens_normal stats_dens_pmf_binomial ' +
							'stats_dens_pmf_hypergeometric stats_dens_pmf_poisson stats_dens_t stats_dens_weibull ' +
							'stats_harmonic_mean stats_kurtosis stats_rand_gen_beta stats_rand_gen_chisquare ' +
							'stats_rand_gen_exponential stats_rand_gen_f stats_rand_gen_funiform stats_rand_gen_gamma ' +
							'stats_rand_gen_ibinomial stats_rand_gen_ibinomial_negative stats_rand_gen_int ' +
							'stats_rand_gen_ipoisson stats_rand_gen_iuniform stats_rand_gen_noncenral_chisquare ' +
							'stats_rand_gen_noncentral_f stats_rand_gen_noncentral_t stats_rand_gen_normal stats_rand_gen_t ' +
							'stats_rand_get_seeds stats_rand_phrase_to_seeds stats_rand_ranf stats_rand_setall stats_skew ' +
							'stats_standard_deviation stats_stat_binomial_coef stats_stat_correlation stats_stat_gennch ' +
							'stats_stat_independent_t stats_stat_innerproduct stats_stat_noncentral_t stats_stat_paired_t ' +
							'stats_stat_percentile stats_stat_powersum stats_variance stomp stomp_connect_error ' +
							'stomp_version stompexception stompframe str_getcsv str_ireplace str_pad str_repeat ' +
							'str_replace str_rot13 str_shuffle str_split str_word_count strcasecmp strchr strcmp ' +
							'strcoll strcspn stream_bucket_append stream_bucket_make_writeable stream_bucket_new ' +
							'stream_bucket_prepend stream_context_create stream_context_get_default ' +
							'stream_context_get_options stream_context_get_params stream_context_set_default ' +
							'stream_context_set_option stream_context_set_params stream_copy_to_stream stream_encoding ' +
							'stream_filter_append stream_filter_prepend stream_filter_register stream_filter_remove ' +
							'stream_get_contents stream_get_filters stream_get_line stream_get_meta_data ' +
							'stream_get_transports stream_get_wrappers stream_is_local stream_notification_callback ' +
							'stream_register_wrapper stream_resolve_include_path stream_select stream_set_blocking ' +
							'stream_set_chunk_size stream_set_read_buffer stream_set_timeout stream_set_write_buffer ' +
							'stream_socket_accept stream_socket_client stream_socket_enable_crypto stream_socket_get_name ' +
							'stream_socket_pair stream_socket_recvfrom stream_socket_sendto stream_socket_server ' +
							'stream_socket_shutdown stream_supports_lock stream_wrapper_register stream_wrapper_restore ' +
							'stream_wrapper_unregister streamwrapper strftime strip_tags stripcslashes stripos ' +
							'stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk strpos ' +
							'strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime ' +
							'strtoupper strtr strval substr substr_compare substr_count substr_replace svm svmmodel ' +
							'svn_add svn_auth_get_parameter svn_auth_set_parameter svn_blame svn_cat svn_checkout ' +
							'svn_cleanup svn_client_version svn_commit svn_delete svn_diff svn_export svn_fs_abort_txn ' +
							'svn_fs_apply_text svn_fs_begin_txn2 svn_fs_change_node_prop svn_fs_check_path ' +
							'svn_fs_contents_changed svn_fs_copy svn_fs_delete svn_fs_dir_entries svn_fs_file_contents ' +
							'svn_fs_file_length svn_fs_is_dir svn_fs_is_file svn_fs_make_dir svn_fs_make_file ' +
							'svn_fs_node_created_rev svn_fs_node_prop svn_fs_props_changed svn_fs_revision_prop ' +
							'svn_fs_revision_root svn_fs_txn_root svn_fs_youngest_rev svn_import svn_log svn_ls svn_mkdir ' +
							'svn_repos_create svn_repos_fs svn_repos_fs_begin_txn_for_commit svn_repos_fs_commit_txn ' +
							'svn_repos_hotcopy svn_repos_open svn_repos_recover svn_revert svn_status svn_update ' +
							'swf_actiongeturl swf_actiongotoframe swf_actiongotolabel swf_actionnextframe swf_actionplay ' +
							'swf_actionprevframe swf_actionsettarget swf_actionstop swf_actiontogglequality ' +
							'swf_actionwaitforframe swf_addbuttonrecord swf_addcolor swf_closefile swf_definebitmap ' +
							'swf_definefont swf_defineline swf_definepoly swf_definerect swf_definetext swf_endbutton ' +
							'swf_enddoaction swf_endshape swf_endsymbol swf_fontsize swf_fontslant swf_fonttracking ' +
							'swf_getbitmapinfo swf_getfontinfo swf_getframe swf_labelframe swf_lookat swf_modifyobject ' +
							'swf_mulcolor swf_nextid swf_oncondition swf_openfile swf_ortho swf_ortho2 swf_perspective ' +
							'swf_placeobject swf_polarview swf_popmatrix swf_posround swf_pushmatrix swf_removeobject ' +
							'swf_rotate swf_scale swf_setfont swf_setframe swf_shapearc swf_shapecurveto ' +
							'swf_shapecurveto3 swf_shapefillbitmapclip swf_shapefillbitmaptile swf_shapefilloff ' +
							'swf_shapefillsolid swf_shapelinesolid swf_shapelineto swf_shapemoveto swf_showframe ' +
							'swf_startbutton swf_startdoaction swf_startshape swf_startsymbol swf_textwidth swf_translate ' +
							'swf_viewport swfaction swfbitmap swfbutton swfdisplayitem swffill swffont swffontchar ' +
							'swfgradient swfmorph swfmovie swfprebuiltclip swfshape swfsound swfsoundinstance swfsprite ' +
							'swftext swftextfield swfvideostream sybase_affected_rows sybase_close sybase_connect ' +
							'sybase_data_seek sybase_deadlock_retry_count sybase_fetch_array sybase_fetch_assoc ' +
							'sybase_fetch_field sybase_fetch_object sybase_fetch_row sybase_field_seek sybase_free_result ' +
							'sybase_get_last_message sybase_min_client_severity sybase_min_error_severity ' +
							'sybase_min_message_severity sybase_min_server_severity sybase_num_fields sybase_num_rows ' +
							'sybase_pconnect sybase_query sybase_result sybase_select_db sybase_set_message_handler ' +
							'sybase_unbuffered_query symlink sys_get_temp_dir sys_getloadavg syslog system taint tan ' +
							'tanh tcpwrap_check tempnam textdomain thread tidy tidy_access_count tidy_config_count ' +
							'tidy_error_count tidy_get_output tidy_load_config tidy_reset_config tidy_save_config ' +
							'tidy_set_encoding tidy_setopt tidy_warning_count tidynode time time_nanosleep ' +
							'time_sleep_until timezone_abbreviations_list timezone_identifiers_list timezone_location_get ' +
							'timezone_name_from_abbr timezone_name_get timezone_offset_get timezone_open ' +
							'timezone_transitions_get timezone_version_get tmpfile token_get_all token_name tokyotyrant ' +
							'tokyotyrantexception tokyotyrantiterator tokyotyrantquery tokyotyranttable touch trader_acos ' +
							'trader_ad trader_add trader_adosc trader_adx trader_adxr trader_apo trader_aroon ' +
							'trader_aroonosc trader_asin trader_atan trader_atr trader_avgprice trader_bbands trader_beta ' +
							'trader_bop trader_cci trader_cdl2crows trader_cdl3blackcrows trader_cdl3inside ' +
							'trader_cdl3linestrike trader_cdl3outside trader_cdl3starsinsouth trader_cdl3whitesoldiers ' +
							'trader_cdlabandonedbaby trader_cdladvanceblock trader_cdlbelthold trader_cdlbreakaway ' +
							'trader_cdlclosingmarubozu trader_cdlconcealbabyswall trader_cdlcounterattack ' +
							'trader_cdldarkcloudcover trader_cdldoji trader_cdldojistar trader_cdldragonflydoji ' +
							'trader_cdlengulfing trader_cdleveningdojistar trader_cdleveningstar trader_cdlgapsidesidewhite ' +
							'trader_cdlgravestonedoji trader_cdlhammer trader_cdlhangingman trader_cdlharami ' +
							'trader_cdlharamicross trader_cdlhighwave trader_cdlhikkake trader_cdlhikkakemod ' +
							'trader_cdlhomingpigeon trader_cdlidentical3crows trader_cdlinneck trader_cdlinvertedhammer ' +
							'trader_cdlkicking trader_cdlkickingbylength trader_cdlladderbottom trader_cdllongleggeddoji ' +
							'trader_cdllongline trader_cdlmarubozu trader_cdlmatchinglow trader_cdlmathold ' +
							'trader_cdlmorningdojistar trader_cdlmorningstar trader_cdlonneck trader_cdlpiercing ' +
							'trader_cdlrickshawman trader_cdlrisefall3methods trader_cdlseparatinglines ' +
							'trader_cdlshootingstar trader_cdlshortline trader_cdlspinningtop trader_cdlstalledpattern ' +
							'trader_cdlsticksandwich trader_cdltakuri trader_cdltasukigap trader_cdlthrusting ' +
							'trader_cdltristar trader_cdlunique3river trader_cdlupsidegap2crows trader_cdlxsidegap3methods ' +
							'trader_ceil trader_cmo trader_correl trader_cos trader_cosh trader_dema trader_div ' +
							'trader_dx trader_ema trader_errno trader_exp trader_floor trader_get_compat ' +
							'trader_get_unstable_period trader_ht_dcperiod trader_ht_dcphase trader_ht_phasor ' +
							'trader_ht_sine trader_ht_trendline trader_ht_trendmode trader_kama trader_linearreg ' +
							'trader_linearreg_angle trader_linearreg_intercept trader_linearreg_slope trader_ln ' +
							'trader_log10 trader_ma trader_macd trader_macdext trader_macdfix trader_mama trader_mavp ' +
							'trader_max trader_maxindex trader_medprice trader_mfi trader_midpoint trader_midprice ' +
							'trader_min trader_minindex trader_minmax trader_minmaxindex trader_minus_di trader_minus_dm ' +
							'trader_mom trader_mult trader_natr trader_obv trader_plus_di trader_plus_dm trader_ppo ' +
							'trader_roc trader_rocp trader_rocr trader_rocr100 trader_rsi trader_sar trader_sarext ' +
							'trader_set_compat trader_set_unstable_period trader_sin trader_sinh trader_sma trader_sqrt ' +
							'trader_stddev trader_stoch trader_stochf trader_stochrsi trader_sub trader_sum trader_t3 ' +
							'trader_tan trader_tanh trader_tema trader_trange trader_trima trader_trix trader_tsf ' +
							'trader_typprice trader_ultosc trader_var trader_wclprice trader_willr trader_wma ' +
							'trait_exists transliterator traversable trigger_error trim uasort ucfirst ucwords ' +
							'udm_add_search_limit udm_alloc_agent udm_alloc_agent_array udm_api_version udm_cat_list ' +
							'udm_cat_path udm_check_charset udm_check_stored udm_clear_search_limits udm_close_stored ' +
							'udm_crc32 udm_errno udm_error udm_find udm_free_agent udm_free_ispell_data udm_free_res ' +
							'udm_get_doc_count udm_get_res_field udm_get_res_param udm_hash32 udm_load_ispell_data ' +
							'udm_open_stored udm_set_agent_param uksort umask underflowexception unexpectedvalueexception ' +
							'uniqid unixtojd unlink unpack unregister_tick_function unserialize unset untaint urldecode ' +
							'urlencode use_soap_error_handler user_error usleep usort utf8_decode utf8_encode v8js ' +
							'v8jsexception var_dump var_export variant variant_abs variant_add variant_and variant_cast ' +
							'variant_cat variant_cmp variant_date_from_timestamp variant_date_to_timestamp variant_div ' +
							'variant_eqv variant_fix variant_get_type variant_idiv variant_imp variant_int variant_mod ' +
							'variant_mul variant_neg variant_not variant_or variant_pow variant_round variant_set ' +
							'variant_set_type variant_sub variant_xor varnishadmin varnishlog varnishstat version_compare ' +
							'vfprintf virtual vpopmail_add_alias_domain vpopmail_add_alias_domain_ex vpopmail_add_domain ' +
							'vpopmail_add_domain_ex vpopmail_add_user vpopmail_alias_add vpopmail_alias_del ' +
							'vpopmail_alias_del_domain vpopmail_alias_get vpopmail_alias_get_all vpopmail_auth_user ' +
							'vpopmail_del_domain vpopmail_del_domain_ex vpopmail_del_user vpopmail_error vpopmail_passwd ' +
							'vpopmail_set_user_quota vprintf vsprintf w32api_deftype w32api_init_dtype ' +
							'w32api_invoke_function w32api_register_function w32api_set_call_method wddx_add_vars ' +
							'wddx_deserialize wddx_packet_end wddx_packet_start wddx_serialize_value wddx_serialize_vars ' +
							'weakmap weakref win32_continue_service win32_create_service win32_delete_service ' +
							'win32_get_last_control_message win32_pause_service win32_ps_list_procs win32_ps_stat_mem ' +
							'win32_ps_stat_proc win32_query_service_status win32_set_service_status win32_start_service ' +
							'win32_start_service_ctrl_dispatcher win32_stop_service wincache_fcache_fileinfo ' +
							'wincache_fcache_meminfo wincache_lock wincache_ocache_fileinfo wincache_ocache_meminfo ' +
							'wincache_refresh_if_changed wincache_rplist_fileinfo wincache_rplist_meminfo ' +
							'wincache_scache_info wincache_scache_meminfo wincache_ucache_add wincache_ucache_cas ' +
							'wincache_ucache_clear wincache_ucache_dec wincache_ucache_delete wincache_ucache_exists ' +
							'wincache_ucache_get wincache_ucache_inc wincache_ucache_info wincache_ucache_meminfo ' +
							'wincache_ucache_set wincache_unlock wordwrap xattr_get xattr_list xattr_remove xattr_set ' +
							'xattr_supported xcom xdiff_file_bdiff xdiff_file_bdiff_size xdiff_file_bpatch xdiff_file_diff ' +
							'xdiff_file_diff_binary xdiff_file_merge3 xdiff_file_patch xdiff_file_patch_binary ' +
							'xdiff_file_rabdiff xdiff_string_bdiff xdiff_string_bdiff_size xdiff_string_bpatch ' +
							'xdiff_string_diff xdiff_string_diff_binary xdiff_string_merge3 xdiff_string_patch ' +
							'xdiff_string_patch_binary xdiff_string_rabdiff xhprof_disable xhprof_enable ' +
							'xhprof_sample_disable xhprof_sample_enable xml_error_string xml_get_current_byte_index ' +
							'xml_get_current_column_number xml_get_current_line_number xml_get_error_code xml_parse ' +
							'xml_parse_into_struct xml_parser_create xml_parser_create_ns xml_parser_free ' +
							'xml_parser_get_option xml_parser_set_option xml_set_character_data_handler ' +
							'xml_set_default_handler xml_set_element_handler xml_set_end_namespace_decl_handler ' +
							'xml_set_external_entity_ref_handler xml_set_notation_decl_handler xml_set_object ' +
							'xml_set_processing_instruction_handler xml_set_start_namespace_decl_handler ' +
							'xml_set_unparsed_entity_decl_handler xmlreader xmlrpc_decode xmlrpc_decode_request ' +
							'xmlrpc_encode xmlrpc_encode_request xmlrpc_get_type xmlrpc_is_fault ' +
							'xmlrpc_parse_method_descriptions xmlrpc_server_add_introspection_data xmlrpc_server_call_method ' +
							'xmlrpc_server_create xmlrpc_server_destroy xmlrpc_server_register_introspection_callback ' +
							'xmlrpc_server_register_method xmlrpc_set_type xmlwriter_end_attribute xmlwriter_end_cdata ' +
							'xmlwriter_end_comment xmlwriter_end_document xmlwriter_end_dtd xmlwriter_end_dtd_attlist ' +
							'xmlwriter_end_dtd_element xmlwriter_end_dtd_entity xmlwriter_end_element xmlwriter_end_pi ' +
							'xmlwriter_flush xmlwriter_full_end_element xmlwriter_open_memory xmlwriter_open_uri ' +
							'xmlwriter_output_memory xmlwriter_set_indent xmlwriter_set_indent_string ' +
							'xmlwriter_start_attribute xmlwriter_start_attribute_ns xmlwriter_start_cdata ' +
							'xmlwriter_start_comment xmlwriter_start_document xmlwriter_start_dtd ' +
							'xmlwriter_start_dtd_attlist xmlwriter_start_dtd_element xmlwriter_start_dtd_entity ' +
							'xmlwriter_start_element xmlwriter_start_element_ns xmlwriter_start_pi xmlwriter_text ' +
							'xmlwriter_write_attribute xmlwriter_write_attribute_ns xmlwriter_write_cdata ' +
							'xmlwriter_write_comment xmlwriter_write_dtd xmlwriter_write_dtd_attlist ' +
							'xmlwriter_write_dtd_element xmlwriter_write_dtd_entity xmlwriter_write_element ' +
							'xmlwriter_write_element_ns xmlwriter_write_pi xmlwriter_write_raw xslt_backend_info ' +
							'xslt_backend_name xslt_backend_version xslt_create xslt_errno xslt_error xslt_free ' +
							'xslt_getopt xslt_process xslt_set_base xslt_set_encoding xslt_set_error_handler xslt_set_log ' +
							'xslt_set_object xslt_set_sax_handler xslt_set_sax_handlers xslt_set_scheme_handler ' +
							'xslt_set_scheme_handlers xslt_setopt xsltprocessor yaf_action_abstract yaf_application ' +
							'yaf_bootstrap_abstract yaf_config_abstract yaf_config_ini yaf_config_simple ' +
							'yaf_controller_abstract yaf_dispatcher yaf_exception yaf_exception_dispatchfailed ' +
							'yaf_exception_loadfailed yaf_exception_loadfailed_action yaf_exception_loadfailed_controller ' +
							'yaf_exception_loadfailed_module yaf_exception_loadfailed_view yaf_exception_routerfailed ' +
							'yaf_exception_startuperror yaf_exception_typeerror yaf_loader yaf_plugin_abstract yaf_registry ' +
							'yaf_request_abstract yaf_request_http yaf_request_simple yaf_response_abstract ' +
							'yaf_route_interface yaf_route_map yaf_route_regex yaf_route_rewrite yaf_route_simple ' +
							'yaf_route_static yaf_route_supervar yaf_router yaf_session yaf_view_interface yaf_view_simple ' +
							'yaml_emit yaml_emit_file yaml_parse yaml_parse_file yaml_parse_url yaz_addinfo yaz_ccl_conf ' +
							'yaz_ccl_parse yaz_close yaz_connect yaz_database yaz_element yaz_errno yaz_error yaz_es ' +
							'yaz_es_result yaz_get_option yaz_hits yaz_itemorder yaz_present yaz_range yaz_record ' +
							'yaz_scan yaz_scan_result yaz_schema yaz_search yaz_set_option yaz_sort yaz_syntax yaz_wait ' +
							'yp_all yp_cat yp_err_string yp_errno yp_first yp_get_default_domain yp_master yp_match ' +
							'yp_next yp_order zend_logo_guid zend_thread_id zend_version zip_close zip_entry_close ' +
							'zip_entry_compressedsize zip_entry_compressionmethod zip_entry_filesize zip_entry_name ' +
							'zip_entry_open zip_entry_read zip_open zip_read ziparchive zlib_decode zlib_encode ' +
							'zlib_get_coding_type ';


		var keywords =		'__halt_compiler abstract and array as break callable case catch cfunction class clone const continue declare default die do '+
							'echo else elseif empty enddeclare endfor endforeach endif endswitch endwhile eval exit extends final finally for foreach function '+
							'global goto if implements include include_once instanceof insteadof interface isset list namespace new or '+
							'print private protected public require require_once return static switch throw trait try unset use var while xor yield';
		
		var constants	=	'__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__' +
							'PHP_VERSION PHP_MAJOR_VERSION PHP_MINOR_VERSION PHP_RELEASE_VERSION PHP_VERSION_ID PHP_EXTRA_VERSION ' +
							'PHP_ZTS PHP_DEBUG PHP_MAXPATHLEN PHP_OS PHP_SAPI PHP_EOL PHP_INT_MAX PHP_INT_SIZE ' +
							'DEFAULT_INCLUDE_PATH PEAR_INSTALL_DIR PEAR_EXTENSION_DIR PHP_EXTENSION_DIR PHP_PREFIX PHP_BINDIR PHP_BINARY ' +
							'PHP_MANDIR PHP_LIBDIR PHP_DATADIR PHP_SYSCONFDIR PHP_LOCALSTATEDIR PHP_CONFIG_FILE_PATH PHP_CONFIG_FILE_SCAN_DIR ' +
							'PHP_SHLIB_SUFFIX  E_ERROR E_WARNING E_PARSE E_NOTICE E_CORE_ERROR E_CORE_WARNING E_COMPILE_ERROR E_COMPILE_WARNING ' +
							'E_USER_ERROR E_USER_WARNING E_USER_NOTICE E_DEPRECATED E_USER_DEPRECATED E_ALL E_STRICT __COMPILER_HALT_OFFSET__';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },			// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// single quoted strings
			{ regex: /\$[a-z_\x7f-\xff][a-z0-9_\x7f-\xff]*/gi			css: 'variable' },			// variables
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),		css: 'functions' },			// common functions
			{ regex: new RegExp(this.getKeywords(constants), 'gmi'),	css: 'constants' },			// constants
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' }			// keyword
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['php'];

	SyntaxHighlighter.brushes.Php = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
