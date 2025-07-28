import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { useThemeStore } from "../store/useThemeStore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  Users, 
  Settings, 
  Search, 
  Bell, 
  Moon, 
  Sun,
  Maximize2,
  Minimize2,
  Grid3X3,
  MoreHorizontal,
  Zap,
  Heart,
  Coffee,
  Rocket,
  Sparkles,
  Activity,
  Wifi,
  WifiOff,
  Volume2,
  VolumeX,
  Focus,
  Eye,
  EyeOff
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser, onlineUsers } = useChatStore();
  const { authUser } = useAuthStore();
  const { theme } = useThemeStore();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [notifications, setNotifications] = useState(3);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [focusMode, setFocusMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userMood, setUserMood] = useState("productive");

  // Mood states with emojis and colors
  const moods = {
    productive: { emoji: "⚡", color: "from-blue-500 to-cyan-500", label: "Productive" },
    creative: { emoji: "🎨", color: "from-purple-500 to-pink-500", label: "Creative" },
    focused: { emoji: "🎯", color: "from-green-500 to-emerald-500", label: "Focused" },
    chill: { emoji: "😌", color: "from-indigo-500 to-blue-500", label: "Chill" },
    energetic: { emoji: "🚀", color: "from-orange-500 to-red-500", label: "Energetic" }
  };

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Network status monitoring
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const handleNotificationClick = () => {
    setNotifications(0);
    // Add notification handling logic here
  };

  const toggleMood = () => {
    const moodKeys = Object.keys(moods);
    const currentIndex = moodKeys.indexOf(userMood);
    const nextIndex = (currentIndex + 1) % moodKeys.length;
    setUserMood(moodKeys[nextIndex]);
  };

  return (
    <div className={`min-h-screen transition-all duration-1000 ${
      focusMode 
        ? 'bg-gradient-to-br from-base-300 via-primary to-base-300' 
        : 'bg-base-100'
    }`}>
      
      {/* ✨ ENHANCED TOP NAVIGATION BAR ✨ */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className={`h-20 px-6 backdrop-blur-xl border-b shadow-2xl transition-all duration-500 ${
          focusMode 
            ? 'bg-base-300/40 border-primary/30 shadow-primary/25' 
            : 'bg-base-100/80 border-base-300'
        }`}>
          <div className="flex items-center justify-between h-full">
            
            {/* LEFT: Brand & Greeting */}
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-500 hover:scale-110 bg-gradient-to-br ${moods[userMood].color}`}>
                <span className="text-xl animate-pulse">{moods[userMood].emoji}</span>
              </div>
              <div>
                <h1 className={`text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                  focusMode 
                    ? 'from-primary to-secondary' 
                    : 'from-primary to-secondary'
                }`}>
                  EchoSync
                </h1>
                <p className={`text-sm ${focusMode ? 'text-base-content/70' : 'text-base-content/70'}`}>
                  {getGreeting()}, {authUser?.fullName?.split(' ')[0] || 'User'}! ✨
                </p>
              </div>
            </div>

            {/* CENTER: Live Status Indicators */}
            <div className="flex items-center gap-4">
              {/* Network Status */}
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isOnline 
                  ? 'bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/25' 
                  : 'bg-red-500/20 text-red-400 shadow-lg shadow-red-500/25'
              }`}>
                {isOnline ? (
                  <Wifi className="w-4 h-4 animate-pulse" />
                ) : (
                  <WifiOff className="w-4 h-4 animate-bounce" />
                )}
                <span className="text-sm font-semibold">
                  {isOnline ? 'LIVE' : 'OFFLINE'}
                </span>
              </div>

              {/* Online Users */}
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full shadow-lg shadow-blue-500/25">
                <Users className="w-4 h-4" />
                <span className="text-sm font-semibold">{onlineUsers?.length || 0} online</span>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              </div>

              {/* Live Clock */}
              <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full shadow-lg shadow-amber-500/25">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-mono font-bold">{formatTime(currentTime)}</span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full shadow-lg shadow-purple-500/25">
                <span className="text-sm font-semibold">{formatDate(currentTime)}</span>
              </div>
            </div>

            {/* RIGHT: Controls & User */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                  focusMode ? 'text-base-content/50' : 'text-base-content/50'
                }`} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className={`w-48 pl-10 pr-4 py-2 rounded-full border-0 transition-all duration-300 focus:scale-105 ${
                    focusMode 
                      ? 'bg-base-300/50 text-base-content placeholder-base-content/50 focus:bg-base-300/70' 
                      : 'bg-base-200 text-base-content placeholder-base-content/50 focus:bg-base-300'
                  }`}
                />
              </div>

              {/* Notifications */}
              <button 
                onClick={handleNotificationClick}
                className="relative p-2 rounded-full hover:bg-base-300/50 transition-all duration-300 group"
              >
                <Bell className="w-5 h-5 text-base-content/70 group-hover:text-primary transition-colors" />
                {notifications > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce shadow-lg">
                    {notifications}
                  </div>
                )}
              </button>

              {/* Sound */}
              <button 
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-2 rounded-full hover:bg-base-300/50 transition-all duration-300 group"
              >
                {soundEnabled ? (
                  <Volume2 className="w-5 h-5 text-base-content/70 group-hover:text-success transition-colors" />
                ) : (
                  <VolumeX className="w-5 h-5 text-error" />
                )}
              </button>

              {/* Focus Mode */}
              <button 
                onClick={() => setFocusMode(!focusMode)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  focusMode 
                    ? 'bg-primary text-primary-content shadow-lg' 
                    : 'hover:bg-base-300/50 text-base-content/70 hover:text-primary'
                }`}
              >
                <Focus className="w-5 h-5" />
              </button>

              {/* Settings */}
              <Link 
                to="/settings"
                className="p-2 rounded-full hover:bg-base-300/50 transition-all duration-300 group"
              >
                <Settings className="w-5 h-5 text-base-content/70 group-hover:text-primary transition-colors" />
              </Link>

              {/* User Avatar */}
              <div className="relative">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-xl transition-all duration-300 hover:scale-110 bg-gradient-to-br ${moods[userMood].color}`}>
                  {authUser?.fullName?.charAt(0) || 'U'}
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-base-100 animate-pulse shadow-lg"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🎨 MAIN INTERFACE 🎨 */}
      <div className="pt-20 h-screen flex">
        
        {/* 🌟 SIDEBAR - STREAMLINED 🌟 */}
        <div className={`w-80 transition-all duration-500 ${
          focusMode 
            ? 'bg-base-300/20 backdrop-blur-xl border-r border-primary/30' 
            : 'bg-base-200/60 backdrop-blur-xl border-r border-base-300'
        }`}>
          <div className="h-full overflow-y-auto">
            <Sidebar />
          </div>
        </div>

        {/* 💬 CHAT AREA - MAGICAL 💬 */}
        <div className="flex-1 flex flex-col">
          {selectedUser ? (
            <>
              {/* Chat Header - Floating */}
              <div className={`mx-4 mt-4 rounded-xl backdrop-blur-xl border shadow-lg transition-all duration-500 ${
                focusMode 
                  ? 'bg-base-300/20 border-primary/30' 
                  : 'bg-base-100/80 border-base-300'
              }`}>
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg bg-gradient-to-br ${moods[userMood].color}`}>
                      {selectedUser.fullName?.charAt(0) || 'U'}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${
                        focusMode ? 'text-base-content' : 'text-base-content'
                      }`}>
                        {selectedUser.fullName}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          onlineUsers?.includes(selectedUser._id) ? 'bg-success animate-pulse' : 'bg-base-content/30'
                        }`}></div>
                        <span className={`text-sm font-medium ${
                          onlineUsers?.includes(selectedUser._id) 
                            ? 'text-success' 
                            : 'text-base-content/50'
                        }`}>
                          {onlineUsers?.includes(selectedUser._id) ? 'Online • Active now' : 'Offline'}
                        </span>
                        {onlineUsers?.includes(selectedUser._id) && (
                          <div className="w-2 h-2 bg-success rounded-full animate-ping"></div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {onlineUsers?.includes(selectedUser._id) && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-success/20 text-success rounded-full shadow-lg">
                        <Activity className="w-4 h-4 animate-pulse" />
                        <span className="text-sm font-bold">LIVE</span>
                      </div>
                    )}
                    <button className="p-2 rounded-full hover:bg-base-300/50 transition-all duration-300">
                      <MoreHorizontal className="w-5 h-5 text-base-content/70" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Chat Messages - With Scrollbar */}
              <div className={`flex-1 m-4 mt-2 rounded-xl backdrop-blur-xl border transition-all duration-500 ${
                focusMode 
                  ? 'bg-base-300/10 border-primary/30' 
                  : 'bg-base-100/40 border-base-300'
              }`}>
                <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-base-content/20 scrollbar-track-transparent">
                  <ChatContainer />
                </div>
              </div>
            </>
          ) : (
            <div className={`flex-1 flex items-center justify-center m-4 rounded-xl backdrop-blur-xl border transition-all duration-500 ${
              focusMode 
                ? 'bg-base-300/10 border-primary/30' 
                : 'bg-base-100/40 border-base-300'
            }`}>
              <NoChatSelected />
            </div>
          )}
        </div>
      </div>

      {/* ✨ AMBIENT EFFECTS ✨ */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse transition-all duration-1000 ${
          focusMode ? 'bg-primary/20' : 'bg-primary/10'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-1000 ${
          focusMode ? 'bg-secondary/20' : 'bg-secondary/10'
        }`}></div>
        <div className={`absolute top-3/4 left-1/2 w-64 h-64 rounded-full blur-2xl animate-pulse delay-500 transition-all duration-1000 ${
          focusMode ? 'bg-accent/20' : 'bg-accent/10'
        }`}></div>
      </div>

      {/* 🎯 FLOATING MOOD INDICATOR 🎯 */}
      <div className="fixed bottom-8 right-8 z-40">
        <button 
          onClick={toggleMood}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white shadow-2xl transition-all duration-300 hover:scale-110 bg-gradient-to-br ${moods[userMood].color}`}
        >
          <span className="animate-bounce">{moods[userMood].emoji}</span>
        </button>
        <div className={`mt-2 px-3 py-1 rounded-full text-xs font-bold text-center transition-all duration-300 ${
          focusMode 
            ? 'bg-primary/20 text-primary-content' 
            : 'bg-base-200 text-base-content'
        }`}>
          {moods[userMood].label}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
