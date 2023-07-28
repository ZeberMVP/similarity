import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { buttonVariants } from '@/ui/Button'
import SignInButton from '@/components/ui/SignInButton'
import SignOutButton from '@/components/ui/SignOutButton'
import { ThemeToggle } from '@/components/ThemeToggle'
import { authOptions } from '@/lib/auth'
import { cn } from '@/lib/utils'
import Icons from './Icons'

const Navbar = async () => {
	const session = await getServerSession(authOptions)

	return (
		<div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'>
			<div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
				<Link href='/' className={buttonVariants({ variant: 'link' })}>
					Text Similarity 1.0
				</Link>

				<div className='md:hidden'>
					<ThemeToggle />
				</div>

				<div className='hidden md:flex gap-4'>
					<ThemeToggle />
					<Link
						href='https://github.com/ZeberMVP/similarity'
						target='_blank'
						rel='noreferrer'
					>
						<div
							className={cn(
								buttonVariants({
									size: 'icon',
									variant: 'ghost',
								}),
								'rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100'
							)}
						>
							<Icons.gitHub className='h-4 w-4' aria-hidden='true' />
							<span className='sr-only'>GitHub</span>
						</div>
					</Link>
					<Link
						href='/documentation'
						className={buttonVariants({ variant: 'ghost' })}
					>
						Documentation
					</Link>

					{session ? (
						<>
							<Link
								className={buttonVariants({ variant: 'ghost' })}
								href='/dashboard'
							>
								Dashboard
							</Link>
							<SignOutButton />
						</>
					) : (
						<SignInButton />
					)}
				</div>
			</div>
		</div>
	)
}

export default Navbar
