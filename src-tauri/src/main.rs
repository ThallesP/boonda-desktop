// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri::{Manager, SystemTray, SystemTrayEvent};
use tauri_plugin_positioner::Position;
use tauri_plugin_positioner::WindowExt;

fn main() {
    let tray = SystemTray::new();
    tauri::Builder::default()
        .plugin(tauri_plugin_positioner::init())
        .system_tray(tray)
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::LeftClick {
                position: _,
                size: _,
                ..
            } => {
                tauri_plugin_positioner::on_tray_event(app, &event);
                let window = app.get_window("main").unwrap();
                // use TrayCenter as initial window position
                let _ = window.move_window(Position::TrayCenter);
                if window.is_visible().unwrap() {
                    window.hide().unwrap();
                } else {
                    window.show().unwrap();
                    window.set_focus().unwrap();
                }
            }
            _ => {}
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
