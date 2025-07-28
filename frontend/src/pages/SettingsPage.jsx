import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { 
  Send, 
  Palette, 
  Eye, 
  Monitor, 
  Smartphone, 
  Check, 
  Settings2, 
  User, 
  Bell, 
  Shield, 
  Moon, 
  Sun,
  Sparkles,
  MessageSquare
} from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's the new theme system coming along?", isSent: false, time: "2:30 PM" },
  { id: 2, content: "Looking amazing! The preview feature is really helpful 🎨", isSent: true, time: "2:32 PM" },
  { id: 3, content: "I love how you can see the changes in real-time!", isSent: false, time: "2:33 PM" },
];

const SETTING_CATEGORIES = [
  {
    id: 'appearance',
    title: 'Appearance',
    icon: Palette,
    description: 'Customize your visual experience'
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: Bell,
    description: 'Manage your notification preferences'
  },
  {
    id: 'privacy',
    title: 'Privacy & Security',
    icon: Shield,
    description: 'Control your privacy settings'
  },
  {
    id: 'account',
    title: 'Account',
    icon: User,
    description: 'Manage your account information'
  }
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200/30 to-base-100 pt-16">
      {/* Compact Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
        <div className="relative container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-md">
                <Settings2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-base-content to-base-content/80 bg-clip-text text-transparent">
                  Settings
                </h1>
                <p className="text-base-content/60">Customize your experience</p>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="hidden md:flex items-center gap-2">
              <div className="px-3 py-1.5 bg-success/10 rounded-full border border-success/20">
                <span className="text-xs font-medium text-success flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></div>
                  Auto-saved
                </span>
              </div>
            </div>
          </div>
          
          {/* Compact Settings Navigation */}
          <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
            {SETTING_CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="group flex items-center gap-2 px-4 py-2 bg-white/40 dark:bg-base-100/40 backdrop-blur-sm rounded-xl border border-white/20 hover:border-primary/30 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <category.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{category.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Theme Selection - Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Theme Section */}
            <div className="bg-base-100 rounded-3xl border border-base-300 shadow-lg overflow-hidden">
              <div className="p-6 border-b border-base-300 bg-gradient-to-r from-primary/5 to-secondary/5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-md">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Theme Customization</h2>
                    <p className="text-base-content/60">Choose a theme that matches your style</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                  {THEMES.map((t) => (
                    <button
                      key={t}
                      className={`
                        group relative flex flex-col items-center gap-3 p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105
                        ${theme === t 
                          ? "border-primary bg-primary/10 shadow-lg shadow-primary/25" 
                          : "border-base-300 hover:border-primary/50 bg-base-50"
                        }
                      `}
                      onClick={() => setTheme(t)}
                    >
                      <div className="relative h-12 w-full rounded-xl overflow-hidden shadow-sm" data-theme={t}>
                        <div className="absolute inset-0 grid grid-cols-2 gap-1 p-1.5">
                          <div className="rounded-md bg-primary"></div>
                          <div className="rounded-md bg-secondary"></div>
                          <div className="rounded-md bg-accent"></div>
                          <div className="rounded-md bg-neutral"></div>
                        </div>
                        {theme === t && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-content shadow-lg">
                              <Check className="w-3 h-3" />
                            </div>
                          </div>
                        )}
                      </div>
                      <span className="text-xs font-semibold text-center leading-tight">
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </span>
                      {theme === t && (
                        <div className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-content shadow-lg">
                          <Sparkles className="w-2.5 h-2.5" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                
                {/* Theme Info */}
                <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-info/10 to-primary/10 border border-info/20">
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-info mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}</h4>
                      <p className="text-xs text-base-content/70 mt-1">
                        Themes are applied instantly across your entire chat experience. Try different ones to find your perfect match!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Settings */}
            <div className="bg-base-100 rounded-3xl border border-base-300 shadow-lg overflow-hidden">
              <div className="p-6 border-b border-base-300 bg-gradient-to-r from-secondary/5 to-accent/5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-accent shadow-md">
                    <Monitor className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Display Preferences</h2>
                    <p className="text-base-content/60">Configure how content appears</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between p-4 rounded-2xl border border-base-300 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <Sun className="w-5 h-5 text-warning" />
                    <div>
                      <h4 className="font-semibold">Auto Dark Mode</h4>
                      <p className="text-sm text-base-content/60">Switch themes based on system preference</p>
                    </div>
                  </div>
                  <input type="checkbox" className="toggle toggle-primary" />
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-2xl border border-base-300 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-info" />
                    <div>
                      <h4 className="font-semibold">Compact Chat View</h4>
                      <p className="text-sm text-base-content/60">Reduce spacing between messages</p>
                    </div>
                  </div>
                  <input type="checkbox" className="toggle toggle-primary" />
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-2xl border border-base-300 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-success" />
                    <div>
                      <h4 className="font-semibold">Mobile Optimized</h4>
                      <p className="text-sm text-base-content/60">Optimize interface for mobile devices</p>
                    </div>
                  </div>
                  <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                </div>
              </div>
            </div>
          </div>
          {/* Preview Section - Right Column */}
          <div className="space-y-4">
            <div className="bg-base-100 rounded-3xl border border-base-300 shadow-lg overflow-hidden sticky top-20">
              <div className="p-6 border-b border-base-300 bg-gradient-to-r from-accent/5 to-info/5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-info shadow-md">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Live Preview</h3>
                    <p className="text-base-content/60">See your theme in action</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="bg-base-200 rounded-2xl p-4 shadow-inner">
                  <div className="max-w-sm mx-auto">
                    {/* Mock Chat UI */}
                    <div className="bg-base-100 rounded-2xl shadow-xl overflow-hidden border border-base-300">
                      {/* Chat Header */}
                      <div className="px-4 py-4 border-b border-base-300 bg-gradient-to-r from-primary/10 to-secondary/10">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg">
                              A
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-success rounded-full border-2 border-base-100"></div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-sm">Alex Johnson</h3>
                            <p className="text-xs text-success flex items-center gap-1">
                              <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></div>
                              Active now
                            </p>
                          </div>
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                            <div className="w-2 h-2 bg-secondary/60 rounded-full"></div>
                            <div className="w-2 h-2 bg-accent/60 rounded-full"></div>
                          </div>
                        </div>
                      </div>

                      {/* Chat Messages */}
                      <div className="p-4 space-y-3 min-h-[240px] max-h-[240px] overflow-y-auto bg-base-50">
                        {PREVIEW_MESSAGES.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                          >
                            <div className="flex items-end gap-2 max-w-[85%]">
                              {!message.isSent && (
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neutral to-neutral-focus flex items-center justify-center text-xs font-bold text-neutral-content">
                                  A
                                </div>
                              )}
                              <div>
                                <div
                                  className={`
                                    rounded-2xl p-3 shadow-sm relative
                                    ${message.isSent 
                                      ? "bg-gradient-to-r from-primary to-primary-focus text-primary-content rounded-br-md" 
                                      : "bg-base-100 border border-base-300 rounded-bl-md"
                                    }
                                  `}
                                >
                                  <p className="text-sm leading-relaxed">{message.content}</p>
                                  <p
                                    className={`
                                      text-[10px] mt-2 text-right
                                      ${message.isSent ? "text-primary-content/70" : "text-base-content/50"}
                                    `}
                                  >
                                    {message.time}
                                  </p>
                                  {message.isSent && (
                                    <div className="absolute -bottom-1 -right-1 flex">
                                      <Check className="w-3 h-3 text-primary-content/70" />
                                      <Check className="w-3 h-3 text-primary-content/70 -ml-1.5" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        
                        {/* Typing indicator */}
                        <div className="flex justify-start">
                          <div className="flex items-end gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neutral to-neutral-focus flex items-center justify-center text-xs font-bold text-neutral-content">
                              A
                            </div>
                            <div className="bg-base-100 border border-base-300 rounded-2xl rounded-bl-md p-3">
                              <div className="flex gap-1">
                                <div className="w-2 h-2 bg-base-content/40 rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-base-content/40 rounded-full animate-pulse delay-100"></div>
                                <div className="w-2 h-2 bg-base-content/40 rounded-full animate-pulse delay-200"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Chat Input */}
                      <div className="p-4 border-t border-base-300 bg-base-100">
                        <div className="flex gap-3 items-end">
                          <div className="flex-1">
                            <input
                              type="text"
                              className="input input-bordered w-full text-sm h-10 rounded-xl border-base-300 focus:border-primary"
                              placeholder="Type your message..."
                              value="This theme looks amazing! ✨"
                              readOnly
                            />
                          </div>
                          <button className="btn btn-primary h-10 min-h-0 rounded-xl px-4 shadow-lg hover:shadow-primary/25">
                            <Send size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Theme Stats */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="text-center p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <div className="text-lg font-bold text-primary">{THEMES.length}</div>
                    <div className="text-xs text-base-content/60">Available Themes</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-gradient-to-br from-success/10 to-success/5 border border-success/20">
                    <div className="text-lg font-bold text-success">Live</div>
                    <div className="text-xs text-base-content/60">Preview Mode</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsPage;
