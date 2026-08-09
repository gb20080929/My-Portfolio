export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-6">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <p className="text-xs text-[#666679]">
          Built with{" "}
          <span className="text-white">
            React · Tailwind CSS
          </span>{" "}
          · by{" "}
          <span className="font-medium text-white">
            Vasudevan
          </span>
        </p>
      </div>
    </footer>
  );
}