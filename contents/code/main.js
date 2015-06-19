var topCorner = false

var timer = new QTimer()
timer.interval = 2000; // set the time in milliseconds
timer.singleShot = true; // in-case if setTimout and false in-case of setInterval 
timer.timeout.connect(this, function(){print("in setTimout"); topCorner = false});
    
function timeout() {
    topCorner = true
    timer.start()
}

function topCornerTrigger() {
    print("starting2")
    timeout()
}

function lock() {
    if (topCorner) {
        print("Locking")
        callDBus("org.kde.screensaver", "/ScreenSaver", "org.freedesktop.ScreenSaver", "Lock")
    }
}

registerScreenEdge(1, topCornerTrigger)
registerScreenEdge(2, lock)
