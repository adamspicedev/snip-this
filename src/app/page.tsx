import AuthButtons from "@/components/auth-buttons";
import Logo from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
	return (
		<div className="poppins">
			<div className="m-5 mx-8 flex items-center justify-between max-sm:flex-col max-sn:mt-9">
				<Logo />
				<div className="flex flex-row gap-4">
					<ModeToggle />
					<AuthButtons />
				</div>
			</div>
			<div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
				<h2 className="text-bold text-2xl text-center">
					Organise Your Code Snippets
					<span className="text-primary "> Efficiently!</span>
				</h2>
				<p className="text-center text-sm w-[450px] max-sm:w-full text-slate-500">
					With our advanced tagging and search features, you can quickly find
					the snippet you need, right when you need it. Spend less time
					searching for code and more time writing it.
				</p>
				<button className="block px-9 text-sm font-medium text-white transition focus:outline-none">
					{`Let's Get Started`}
				</button>
			</div>
		</div>
	);
}
