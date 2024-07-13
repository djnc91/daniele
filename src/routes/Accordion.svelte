<script>
  import IcTwotoneKeyboardDoubleArrowDown from '~icons/ic/twotone-keyboard-double-arrow-down';

  export let open = false;
	import { slide } from 'svelte/transition';
  
	const handleClick = () => open = !open
</script>

<div class="accordion">
  <div class="header" on:click={handleClick}>
    <div class="text">
      <slot name="head"></slot>	
		</div>
		
		<button >
      <IcTwotoneKeyboardDoubleArrowDown />
		</button>
	</div>
	
	{#if open}
	<div class="details" transition:slide>
    <slot name="details">
    </slot>
	</div>
	{/if}
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
  
  div.accordion {
		/* margin: 1rem 0; */
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 10px;
	}
	
	div.header {
    display:flex;
		width:100%;
    align-items: center;
    padding-bottom: 20px;
    padding-left: 10px;
    border-radius: 4px;
    cursor: pointer;
    color: var(--clr-secondary-text);
	}
  
  div.header:hover button {
    border: 1px solid var(--clr-secondary);
    background-color: var(--clr-secondary-alpha-2);
  }
  
	div.header .text {
    color: var(--clr-secondary-text);
    flex: 1;
		margin-right: 5px;
    font-family: 'Poppins';
    font-weight: bold;
    transition: filter 0.3s ease-in-out;
	}
	
	div.details {
    /* width:90%; */
    color: var(--clr-secondary-text);
    background-color: var(--clr-secondary-alpha-3);
		padding:1rem;
    border-radius: 4px;
    font-family: 'Lora';
    border: 1px solid var(--clr-secondary-alpha-2);
    
	}
  
  button {
    background-color: var(--clr-secondary-alpha-2);
    color: var(--clr-secondary);
    border: 2px solid transparent;
    font-size: 1.2rem;
    height: 40px;
    width: 40px;
    padding: 5px;
    border-radius: 50px;
    transition: background-color 0.3s ease-in-out, border 0.3s ease-in-out;
  }

  button:hover {
    border: 2px solid var(--clr-secondary);
    background-color: var(--clr-secondary-alpha-2);
  }

  @media all and (max-width: 1440px) {
    div.header,
    div.header .text,
    div.details {
      font-size: 0.8rem;
    }
  }

  @media all and (max-width: 768px) {
    div.accordion {
      padding-left: 0px;
    }
  }
</style>
