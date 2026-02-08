interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (password: string) => void;
}

export function PasswordModal({ isOpen, onClose, onSubmit }: PasswordModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get('password') as string;
    onSubmit(password);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95">
      <div className="w-full max-w-xs p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">请输入游戏密码</h2>
        <p className="text-gray-400 text-sm mb-6 text-center">获取密码请添加微信chrissdom</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="password"
              placeholder=""
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              maxLength={6}
              minLength={6}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
          >
            确认
          </button>
        </form>
      </div>
    </div>
  );
}
