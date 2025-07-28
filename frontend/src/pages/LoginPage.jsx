import { useState, useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, AlertCircle, CheckCircle2 } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const { login, isLoggingIn } = useAuthStore();

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Real-time validation
  useEffect(() => {
    if (touched.email || touched.password) {
      const isValid = validateForm();
      setIsFormValid(isValid && formData.email && formData.password);
    }
  }, [formData, touched]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      // Clear error when user starts typing
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleInputBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({ email: true, password: true });
    
    if (validateForm()) {
      login(formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Hero Content */}
        <div className="hidden lg:flex flex-col justify-center space-y-8 text-white">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <MessageSquare className="w-5 h-5 text-purple-300" />
              <span className="text-sm font-medium">EchoSync Platform</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Connect.
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Communicate.
              </span>
              <br />
              Collaborate.
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Join thousands of users who trust EchoSync for seamless real-time communication 
              and collaboration across teams.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Real-time messaging</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm">Secure & encrypted</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-sm">User-Friendly</span>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md">
            {/* Glass Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-gray-300">Enter your credentials to access your account</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-white">Email</span>
                    {errors.email && (
                      <span className="label-text-alt text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </span>
                    )}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className={`h-5 w-5 transition-colors ${
                        errors.email ? 'text-red-400' : 
                        formData.email && !errors.email ? 'text-green-400' : 
                        'text-gray-400'
                      }`} />
                    </div>
                    <input
                      type="email"
                      className={`w-full pl-10 pr-10 py-3 bg-white/5 border rounded-xl backdrop-blur-sm transition-all duration-200 focus:scale-[1.02] focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-red-400 focus:ring-red-400/50 text-red-300' : 
                        formData.email && !errors.email ? 'border-green-400 focus:ring-green-400/50 text-white' : 
                        'border-white/20 focus:ring-purple-400/50 text-white'
                      } placeholder-gray-400`}
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onBlur={() => handleInputBlur('email')}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {formData.email && !errors.email && (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-white">Password</span>
                    {errors.password && (
                      <span className="label-text-alt text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.password}
                      </span>
                    )}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className={`h-5 w-5 transition-colors ${
                        errors.password ? 'text-red-400' : 
                        formData.password && !errors.password ? 'text-green-400' : 
                        'text-gray-400'
                      }`} />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`w-full pl-10 pr-20 py-3 bg-white/5 border rounded-xl backdrop-blur-sm transition-all duration-200 focus:scale-[1.02] focus:outline-none focus:ring-2 ${
                        errors.password ? 'border-red-400 focus:ring-red-400/50 text-red-300' : 
                        formData.password && !errors.password ? 'border-green-400 focus:ring-green-400/50 text-white' : 
                        'border-white/20 focus:ring-purple-400/50 text-white'
                      } placeholder-gray-400`}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      onBlur={() => handleInputBlur('password')}
                      aria-invalid={errors.password ? 'true' : 'false'}
                      aria-describedby={errors.password ? 'password-error' : undefined}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-3">
                      {formData.password && !errors.password && (
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                      )}
                      <button
                        type="button"
                        className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-white/10 transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 ${
                    isFormValid && !isLoggingIn 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-purple-500/25' 
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={isLoggingIn || (!isFormValid && (touched.email || touched.password))}
                >
                  {isLoggingIn ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      <span>Sign in to EchoSync</span>
                      <div className="group-hover:translate-x-1 transition-transform">
                        →
                      </div>
                    </>
                  )}
                </button>
              </form>

              <div className="text-center mt-6">
                <p className="text-gray-300">
                  Don&apos;t have an account?{" "}
                  <Link to="/signup" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                    Create account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
