'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/images/arise_shine-logo.png';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);
	const location = useLocation();

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
				'sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[rgba(11,11,12,0.85)] backdrop-blur-xl transition-all duration-300',
				{
					'shadow-[0_10px_25px_rgba(0,0,0,0.2)]': scrolled,
				},
			)}
		>
			<nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<Link to="/" className="flex items-center gap-3 rounded-full px-2 py-1.5 transition hover:bg-white/5">
					<div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[var(--border-gold)] bg-white/90 shadow-sm shadow-[rgba(212,160,23,0.15)]">
						<img src={logo} alt="Arise and Shine Football Academy logo" className="h-full w-full object-cover" />
					</div>
					<div className="flex min-w-0 flex-col leading-none">
						<span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--text-primary)] sm:text-base">ARISE & SHINE FA</span>
						<span className="mt-0.5 text-[7px] font-semibold uppercase tracking-[0.18em] text-[var(--gold)] sm:text-[10px] sm:tracking-[0.24em]">In God We Trust</span>
					</div>
				</Link>

				<div className="hidden items-center gap-8 md:flex">
					{links.map((link) => {
						const isActive = location.pathname === link.href;
						return (
							<Link
								key={link.label}
								className={cn(
									'group relative inline-flex items-center py-2 text-[14px] font-medium uppercase tracking-[0.08em] text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--gold)]',
									isActive && 'text-[var(--gold)]',
								)}
								style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
								to={link.href}
							>
								<span className="relative">
									{link.label}
									<span className={cn(
										'absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-[var(--gold)] transition-transform duration-200',
										isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
									)} />
								</span>
							</Link>
						);
					})}
				</div>

				<div className="hidden md:flex">
					<Link
						to="/contact"
						className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-5 py-2 text-[14px] font-semibold uppercase tracking-[0.08em] text-[var(--bg-primary)] transition-colors duration-200 hover:bg-[var(--gold-hover)]"
						style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
					>
						Join Now
					</Link>
				</div>

				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="md:hidden border-[var(--border)] bg-white/5 text-[var(--text-primary)] shadow-lg shadow-black/25"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>

			<MobileMenu open={open} className="flex flex-col justify-between gap-4 bg-[rgba(11,11,12,0.95)]">
				<div className="grid gap-y-2">
					{links.map((link) => (
						<Link
							key={link.label}
							className={cn(
								buttonVariants({
									variant: 'ghost',
									className: 'justify-start text-[#F5F3EF] hover:text-[#D4A017]',
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
				'fixed inset-x-0 bottom-0 left-0 right-0 top-20 z-40 flex flex-col overflow-hidden border-t border-[#D4A017]/40 bg-[#0E0E10]/95 backdrop-blur-xl md:hidden',
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
