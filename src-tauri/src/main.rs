// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri::api::dialog::FileDialogBuilder;
use tauri::{SystemTray, SystemTrayEvent};

fn main() {
    let tray = SystemTray::new();
    tauri::Builder::default()
        .system_tray(tray)
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::LeftClick {
                position: _,
                size: _,
                ..
            } => FileDialogBuilder::new()
                .set_title("Select a file to upload")
                .pick_file(|file_path| println!("{:?}", file_path)),
            _ => {}
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
