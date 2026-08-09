'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{
			label: 'About',
			href: '/about',
		},
		{
			label: 'Programs',
			href: '/programs',
		},
		{
			label: 'Gallery',
			href: '/gallery',
		},
		{
			label: 'Membership',
			href: '/membership',
		},
		{
			label: 'Teams',
			href: '/teams',
		},
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
			className={cn('sticky top-0 z-50 w-full border-b border-transparent', {
				'bg-gray-900/95 supports-[backdrop-filter]:bg-gray-900/50 border-amber-500/20 backdrop-blur-lg':
					scrolled,
				'bg-gray-900': !scrolled,
			})}
		>
			<nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4">
				<Link to="/" className="flex items-center space-x-2 hover:bg-amber-500/10 rounded-md p-2">
					<div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center font-bold text-white text-xs">
						AS
					</div>
					<span className="text-lg font-bold text-white hidden sm:inline">Arise & Shine</span>
				</Link>
				<div className="hidden items-center gap-2 md:flex">
					{links.map((link) => (
						<Link key={link.label} className={cn(buttonVariants({ variant: 'ghost' }), 'text-gray-300 hover:text-amber-400')} to={link.href}>
							{link.label}
						</Link>
					))}
					<Button variant="outline" className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10">Contact</Button>
					<Button className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white">Enroll Now</Button>
				</div>
				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="md:hidden border-amber-500/50 text-amber-400"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>
			<MobileMenu open={open} className="flex flex-col justify-between gap-4">
				<div className="grid gap-y-2">
					{links.map((link) => (
						<Link
							key={link.label}
							className={cn(buttonVariants({
								variant: 'ghost',
								className: 'justify-start text-gray-300 hover:text-amber-400',
							}))}
							to={link.href}
							onClick={() => setOpen(false)}
						>
							{link.label}
						</Link>
					))}
				</div>
				<div className="flex flex-col gap-2">
					<Button variant="outline" className="w-full bg-transparent border-amber-500/50 text-amber-400">
						Contact
					</Button>
					<Button className="w-full bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white">Enroll Now</Button>
				</div>
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
				'bg-gray-900/95 supports-[backdrop-filter]:bg-gray-900/50 backdrop-blur-lg',
				'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y border-amber-500/20 md:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
					'size-full p-4',
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
