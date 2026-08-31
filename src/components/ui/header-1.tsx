'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import logo from '@/images/arise_shine-logo.png';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{ label: 'Gallery', href: '/gallery' },
		{ label: 'Membership', href: '/membership' },
		{ label: 'Teams', href: '/teams' },
		{ label: 'Contact', href: '/contact' },
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn(
				'sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300',
				{
					'border-[#f6c14a]/30 bg-[#1a2b3d]/85 shadow-lg shadow-[#1a2b3d]/20 backdrop-blur-xl': scrolled,
					'bg-[#1a2b3d]/90': !scrolled,
				},
			)}
		>
			<nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<Link to="/" className="flex items-center gap-3 rounded-full px-2 py-1.5 transition hover:bg-white/5">
					<div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#f6c14a]/50 bg-white/90 shadow-sm shadow-[#f6c14a]/30">
						<img src={logo} alt="Arise and Shine Football Academy logo" className="h-full w-full object-cover" />
					</div>
					<div className="flex flex-col leading-none">
						<span className="hidden text-base font-bold tracking-[0.12em] text-white sm:inline">ARISE & SHINE FA</span>
						<span className="hidden text-[10px] font-semibold uppercase tracking-[0.24em] text-[#f6c14a] sm:block">In God We Trust</span>
					</div>
				</Link>

				<div className="hidden items-center gap-2 md:flex">
					{links.map((link) => (
						<Link
							key={link.label}
							className={cn(
								buttonVariants({ variant: 'ghost' }),
								'text-sm font-medium text-slate-200 transition hover:text-[#f6c14a]',
							)}
							to={link.href}
						>
							{link.label}
						</Link>
					))}
				</div>

				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="md:hidden border-[#f6c14a]/40 bg-[#355f8a]/10 text-[#f4dcc0] shadow-lg shadow-[#355f8a]/20"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>

			<MobileMenu open={open} className="flex flex-col justify-between gap-4 bg-[#1a2b3d]/95">
				<div className="grid gap-y-2">
					{links.map((link) => (
						<Link
							key={link.label}
							className={cn(
								buttonVariants({
									variant: 'ghost',
									className: 'justify-start text-slate-200 hover:text-[#f6c14a]',
								}),
							)}
							to={link.href}
							onClick={() => setOpen(false)}
						>
							{link.label}
						</Link>
					))}
				</div>
				<div className="flex flex-col gap-2" />
			</MobileMenu>
		</header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'fixed inset-x-0 bottom-0 left-0 right-0 top-20 z-40 flex flex-col overflow-hidden border-t border-sky-400/20 bg-slate-950/95 backdrop-blur-xl md:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out size-full p-4',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}
